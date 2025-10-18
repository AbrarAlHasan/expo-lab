import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Expo Lab',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="playgrounds/[id]"
          options={{
            title: 'Playground',
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
