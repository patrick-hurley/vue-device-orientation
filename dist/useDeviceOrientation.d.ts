export declare const useDeviceOrientation: () => {
    isMobileAndPortrait: import("vue").Ref<boolean, boolean>;
    isMobile: import("vue").Ref<boolean, boolean>;
    orientationLoading: import("vue").Ref<boolean, boolean>;
    getIsMobile: () => boolean;
    getIsMobileAndPortrait: () => boolean;
    updateMobileCalculations: () => void;
    onOrientationChange: (cb: () => void) => Promise<void>;
};
