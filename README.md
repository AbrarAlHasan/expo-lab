# Expo Lab - POC Playground

A React Native Expo project with prebuild configuration for testing and experimenting with various native modules and POCs (Proof of Concepts).

## 🚀 Features

- **Prebuild Configuration**: Ready for native module integration
- **Modular Playground Structure**: Each POC has its own dedicated screen and folder
- **Navigation**: Clean navigation between main screen and individual playgrounds
- **TypeScript**: Full TypeScript support
- **Android Permissions**: Pre-configured for common native module permissions

## 📁 Project Structure

```
app/                    # Expo Router file-based routing
├── _layout.tsx         # Root layout with navigation
├── index.tsx           # Main screen (home)
└── playgrounds/        # Dynamic playground routes
    └── [id].tsx        # Dynamic playground screen

src/
├── components/         # Reusable UI components
├── playgrounds/        # Individual POC screen components
│   ├── ReactNativeAudioPlayground.tsx
│   ├── CameraPlayground.tsx
│   ├── LocationPlayground.tsx
│   └── NotificationPlayground.tsx
└── types/              # TypeScript type definitions
    └── index.ts
```

## 🎯 Available Playgrounds

1. **React Native Audio** - Audio recording and playback experiments
2. **Camera Experiments** - Camera functionality and image processing
3. **Location Services** - GPS and location tracking features
4. **Push Notifications** - Local and remote notification handling

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Run on Android:
   ```bash
   npm run android
   ```

4. Run on iOS:
   ```bash
   npm run ios
   ```

### Prebuild Configuration

This project is configured with prebuild, which means you can add native modules and they will be automatically integrated into the native projects.

To add a new native module:

1. Install the module:
   ```bash
   npm install <module-name>
   ```

2. Run prebuild to update native projects:
   ```bash
   npx expo prebuild
   ```

3. Rebuild the app:
   ```bash
   npm run android
   # or
   npm run ios
   ```

## 🎮 Adding New Playgrounds

To add a new POC playground:

1. Create a new component in `src/playgrounds/`:
   ```typescript
   // src/playgrounds/YourNewPlayground.tsx
   import React from 'react';
   import { View, Text, StyleSheet } from 'react-native';

   const YourNewPlayground: React.FC = () => {
     return (
       <View style={styles.container}>
         <Text>Your POC content here</Text>
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       padding: 16,
     },
   });

   export default YourNewPlayground;
   ```

2. Add the playground to `app/playgrounds/[id].tsx`:
   ```typescript
   import YourNewPlayground from '../../src/playgrounds/YourNewPlayground';
   
   // Add case in renderPlaygroundContent():
   case 'YourNewPlayground':
     return <YourNewPlayground />;
   ```

3. Add the item to the list in `app/index.tsx`:
   ```typescript
   {
     id: 'your-new-poc',
     title: 'Your New POC',
     description: 'Description of your POC',
     category: 'Category',
     screenName: 'YourNewPlayground',
   }
   ```

## 📱 Native Module Examples

### Audio Recording
- `react-native-audio-recorder-player`
- `expo-av`
- `react-native-sound`

### Camera
- `expo-camera`
- `react-native-vision-camera`
- `expo-barcode-scanner`

### Location
- `expo-location`
- `react-native-maps`
- `@react-native-community/geolocation`

### Notifications
- `expo-notifications`
- `@react-native-firebase/messaging`
- `react-native-push-notification`

## 🔧 Configuration

### Android Permissions
Common permissions are pre-configured in `app.json`:
- `RECORD_AUDIO` - For audio recording
- `WRITE_EXTERNAL_STORAGE` - For file operations
- `READ_EXTERNAL_STORAGE` - For file access

### iOS Configuration
Bundle identifier is set to `com.expo.expo-lab` for iOS.

## 📝 Development Notes

- Each playground is self-contained and can be developed independently
- Use TypeScript for better development experience
- Follow the existing folder structure for consistency
- Add proper error handling and loading states
- Test on both Android and iOS when possible

## 🤝 Contributing

1. Create a new branch for your POC
2. Add your playground following the established structure
3. Test thoroughly on both platforms
4. Update this README if adding new features or changing structure

## 📄 License

This project is for educational and experimental purposes.
