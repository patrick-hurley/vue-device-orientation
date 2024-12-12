interface DeviceOrientationConfig {
    deviceMaxWidth?: number;
}
export declare const useDeviceOrientation: (config?: DeviceOrientationConfig) => {
    isMobile: import("vue").ComputedRef<boolean>;
    isMobileAndPortrait: import("vue").ComputedRef<boolean>;
    orientationLoading: import("vue").Ref<boolean, boolean>;
    onOrientationChange: (cb?: () => void) => Promise<void>;
};
export {};
