# vue-device-orientation

`useDeviceOrientation` is a Vue 3 composable to detect where the user is on a mobile device, and whether that device is in portrait mode. This can be useful for instructing users to rotate their phone to landscape.
## Features
- **Custom Config**: You can pass a configuration object to customize the maximum width that determines whether the device is considered mobile.
- **Orientation Change Handling**: Supports detecting orientation changes and provides the option of passing a callback to be executed after the orientation change has completed.
- **Resize Support**: Listens to window resizing and updates the device state accordingly.

## Installation

You can install the package via npm:

```bash
npm install vue-device-orientation
```

## Basic usage
Import the composable in your Vue component and use it to get the mobile and portrait state.

```html
<script setup>
import { useDeviceOrientation } from "vue-device-orientation";

// Initialize with the default config
const { isMobile, isMobileAndPortrait, orientationLoading, onOrientationChange } = useDeviceOrientation();
</script>

<template>
  <div>
    <p>Is Mobile: {{ isMobile }}</p>
    <p>Is Mobile and Portrait: {{ isMobileAndPortrait }}</p>
    <p v-if="orientationLoading">Updating orientation...</p>
  </div>
</template>
```

### Custom config
You can pass a custom configuration object to override the default `deviceMaxWidth` (default is 600px).

```html
<script setup>
import { useDeviceOrientation } from "vue-device-orientation";

// Initialize with a custom max width for mobile devices
const { isMobile, isMobileAndPortrait, orientationLoading, onOrientationChange } = useDeviceOrientation({
  deviceMaxWidth: 500,
});
</script>
```

### Orientation change callback
You can optionally provide additional functionality via a callback to be executed when the orientation changes.

```html
<script setup>
import { useDeviceOrientation } from "vue-device-orientation";

const { onOrientationChange } = useDeviceOrientation();

onMounted(() => {
    window.addEventListener("orientationchange", () => onOrientationChange(myExtraFunction));
});
</script>
```

## API
`useDeviceOrientation(config: DeviceOrientationConfig = {})`

### Parmeters
• `deviceMaxWidth (number)`: The maximum width (in pixels) for determining if the device is considered mobile. The default value is 600.

### Returns
• `isMobile` (computed): A reactive value that is true if the device is mobile (i.e., its screen width is less than or equal to the deviceMaxWidth).

• `isMobileAndPortrait` (computed): A reactive value that is true if the device is mobile and in portrait mode.

• `orientationLoading` (ref): A reactive value indicating if the orientation is being updated.

• `onOrientationChange(cb?: () => void)` (function): A function that accepts an optional callback to be executed when the orientation changes. If no callback is provided, the function still updates the state.


## License
MIT
