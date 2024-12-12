import { ref, computed, onMounted, onUnmounted } from "vue";
export const useDeviceOrientation = (config = {}) => {
    const viewportWidth = ref(window.innerWidth);
    const devicePixelRatio = ref(window.devicePixelRatio);
    const isPortrait = ref(screen.orientation?.type.startsWith("portrait"));
    // Config defaults
    const deviceMaxWidth = config.deviceMaxWidth || 600;
    // Function to update viewport width
    const updateViewportWidth = () => {
        viewportWidth.value = window.innerWidth;
    };
    // Function to update devicePixelRatio
    const updateDevicePixelRatio = () => {
        devicePixelRatio.value = window.devicePixelRatio;
    };
    // Function to update isPortrait value
    const updateIsPortrait = () => {
        isPortrait.value = screen.orientation?.type.startsWith("portrait");
    };
    // Compute whether the device is mobile based on viewport width and device pixel ratio
    const isMobile = computed(() => {
        const expectedWidth = viewportWidth.value / devicePixelRatio.value;
        return expectedWidth <= deviceMaxWidth;
    });
    // Compute whether the device is mobile and in portrait mode
    const isMobileAndPortrait = computed(() => isMobile.value && isPortrait.value);
    const orientationLoading = ref(false);
    // Wait for orientation changes and trigger callback
    const onOrientationChange = async (cb) => {
        orientationLoading.value = true;
        setTimeout(() => {
            updateViewportWidth();
            updateDevicePixelRatio();
            updateIsPortrait();
            orientationLoading.value = false;
            cb?.();
        }, 2000);
    };
    onMounted(() => {
        window.addEventListener("resize", updateViewportWidth);
        window.addEventListener("resize", updateDevicePixelRatio);
    });
    onUnmounted(() => {
        window.removeEventListener("resize", updateViewportWidth);
        window.removeEventListener("resize", updateDevicePixelRatio);
    });
    return {
        isMobile,
        isMobileAndPortrait,
        orientationLoading,
        onOrientationChange,
    };
};
