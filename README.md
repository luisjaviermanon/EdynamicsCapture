# EdynamicsCapture

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till the "Creating a new application" step before proceeding.

## Prerequisites

- **Node.js**: 18 or higher
- **Ruby**: 2.6.10 or higher
- **CocoaPods**: 1.13 or higher

## Step 1: Install Dependencies

First, you need to install the project dependencies. From the root of your project, run:

````bash
npm install

## Step 2: Install iOS Dependencies
Navigate to the iOS directory and install the CocoaPods dependencies:

```bash
cd ios
pod install

> **Note**:Note: If you encounter the error Could not find proper version of cocoapods (1.14.3) in any of the sources, run bundle install to install the missing gems, then execute pod install again.
## Step 3: Start the Metro Server

Start Metro, the JavaScript bundler that ships with React Native:
```bash
npx react-native start

Let Metro Bundler run in its own terminal.
Open EdynamicsCapture.xcworkspace located in the ios folder.
Connect your physical iPhone to your computer.
In Xcode, select your connected iPhone as the target device.
Go to the Signing & Capabilities tab and select your team under the Team dropdown.

## Step 5: Run the Application on Your Physical Device
With your iPhone connected and selected as the target device, run the application:

Click the Run button in Xcode or use the shortcut <kbd>Cmd</kbd> + <kbd>R</kbd>.
If everything is set up correctly, you should see your app running on your physical iPhone.

## New Features to Add
Integrate the Vision Camera Plugin for capturing photos, including thumbnail display.

Use the following example as a base to activate the necessary features:

Front and rear camera
Flash control
Shutter sound control
Frame rate control (60fps and 30fps, default is 30fps)
HDR toggle if supported by the device
Improve the user interface with rounded border for the camera and enhanced button design.

## Congratulations! 🎉
You've successfully run Edynamics Capture. 🥳
````
