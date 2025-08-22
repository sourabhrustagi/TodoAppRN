This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


Here’s a detailed explanation of the entire screen flow for the advanced React Native Todo app test:

***

## Screen Flow Explanation

### 1. **Splash / Loading Screen (Optional)**
- Displays while the app is initializing.
- Checks if the user is already authenticated (using persisted auth state).
- Redirects to **Login Screen** if not authenticated or **Todo List Screen** if logged in.

***

### 2. **Sign Up Screen**
- Form for new users to create an account (email, password, username).
- Validates inputs and shows error messages for invalid or existing credentials.
- On successful sign-up, automatically logs the user in or redirects to Login Screen.
- Option to navigate to Login Screen.

***

### 3. **Login Screen**
- Allows existing users to authenticate with email and password.
- Shows form validation messages and login errors.
- Supports login via biometric authentication (fingerprint or Face ID) if enabled.
- On successful login, navigates to the **Todo List Screen**.
- Option to navigate to Sign Up Screen.

***

### 4. **Todo List Screen**
- Displays a scrollable list of todo items.
- Each todo shows key info: title, completion status, priority, and due date.
- Includes search bar and filters (e.g., by status, priority).
- Supports drag-and-drop todo sorting.
- Swipe gestures allow quick marking as complete or deleting.
- Button to add a new todo navigates to **Todo Detail Screen** in “add” mode.
- Selecting a todo navigates to **Todo Detail Screen** with that todo’s details.
- Access to app menu or bottom tab includes navigation to **Settings Screen**.
- Logout button accessible via menu or settings.

***

### 5. **Todo Detail Screen**
- Shows full todo details: title, description, priority, due date, creation date, completion status.
- Editable form for updating fields with validation.
- Save button persists changes and navigates back to Todo List.
- Delete button removes todo and navigates back to Todo List.
- Cancel or back button discards changes and returns to Todo List.
- Displays loading or error states during save/delete operations.

***

### 6. **Settings Screen**
- Allows user to:
  - Toggle dark/light theme with instant UI updates.
  - Toggle notifications on/off (simulated toggle).
  - Update account info (optional).
  - Logout button that clears auth state and navigates back to Login Screen.
- Stores settings persistently and applies changes app-wide.
- Navigation back to Todo List or other main screens.

***

### Navigation Flow Summary

```plaintext
[Splash Screen] 
    ├─> [Login Screen] 
    │     ├─> [Sign Up Screen]
    │     └─> Successful login → [Todo List Screen]
    └─> Authenticated → [Todo List Screen]
              ├─> [Todo Detail Screen] (for creating/editing todos)
              └─> [Settings Screen]
                      └─> Logout → [Login Screen]
```

***

### Key UX Considerations

- **Protected Routes:** Only authenticated users can access Todo and Settings screens.
- **State Persistence:** Auth, todos, and settings saved locally for seamless user experience.
- **Smooth Transitions:** Navigation animations and UI feedback on actions.
- **Offline Support:** Users can view and edit todos even without network connectivity, syncing when online.

***

This screen flow emulates complex user journeys expected in production-level fintech or enterprise React Native apps, testing navigation, state, security, and usability comprehensively.

First deliver instruction:
Frist basic todo app with best practises and mock response nad use following libraries

UI Components	React Native Paper
Navigation	React Navigation
State Management	Redux Toolkit
Forms & Validation	React Hook Form
Network/API Calls	Axios
Storage/Persistence	AsyncStorage
List Performance	FlashList
Authentication	Firebase Auth
Secure Storage	React Native Keychain
Testing (unit/UI)	Jest

next phase 
Animations	React Native Reanimated
Gestures	React Native Gesture Handler
App Configuration & Env Vars	Separate configs, secure keys, feature toggles	react-native-config / react-native-dotenv
Error Tracking & Crash Reporting	Catch issues, stability, telemetry	Sentry, Firebase Crashlytics
Analytics & User Behavior	Understand usage, improve product, KPIs	Firebase Analytics, Amplitude, Segment
Internationalization (i18n)	Support multiple languages, localization	react-i18next, react-native-localize
Accessibility	Usable for all, meets standards, inclusivity	Accessible props, color contrast, screen readers
CI/CD	Automated tests/builds, safer/faster releases	GitHub Actions, Bitrise, CircleCI, Fastlane
App Versioning & Updates	Track releases, OTA updates, backward compatibility	react-native-code-push
Deep Linking & Universal Links	Entry to screens from outside/app links	React Navigation Deep Linking, Branch.io
Security	Data safety, compliance, code protection	Secure storage, cert pinning, obfuscation
Performance Monitoring	Detect/resolve bottlenecks, smooth UX	Flipper, Reactotron, Firebase Performance
Image & Asset Management	Optimize images/assets for all devices/performance	react-native-fast-image
Background Tasks & Notifications	Reliable syncing/alerts/reminders	react-native-background-fetch, RN Firebase Messaging
Feature Flags / A/B Testing	Gradual release, experiments	launchdarkly-react-native-client-sdk
Onboarding / Walkthrough	User onboarding, product adoption	react-native-app-intro-slider
Data Encryption	Protect data at rest and in transit	Encryption libraries, secure storage