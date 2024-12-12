import { nextTick, ref } from "vue";
export const useDeviceOrientation = () => {
    const isMobileAndPortrait = ref(false);
    const isMobile = ref(false);
    const orientationLoading = ref(false);
    const getIsMobile = () => {
        const dpr = window.devicePixelRatio;
        const viewportWidth = window.innerWidth;
        const expectedWidth = viewportWidth / dpr;
        return expectedWidth <= 600;
    };
    const getIsMobileAndPortrait = () => {
        const isPortrait = screen.orientation?.type.startsWith("portrait");
        return isMobile.value && isPortrait;
    };
    const updateMobileCalculations = () => {
        isMobile.value = getIsMobile();
        isMobileAndPortrait.value = getIsMobileAndPortrait();
    };
    // Wait for screen to rotate before recalculating values
    const onOrientationChange = async (cb) => {
        orientationLoading.value = true;
        setTimeout(() => {
            updateMobileCalculations();
            orientationLoading.value = false;
            nextTick(() => {
                cb();
            });
        }, 1000);
    };
    return {
        isMobileAndPortrait,
        isMobile,
        orientationLoading,
        getIsMobile,
        getIsMobileAndPortrait,
        updateMobileCalculations,
        onOrientationChange,
    };
};
