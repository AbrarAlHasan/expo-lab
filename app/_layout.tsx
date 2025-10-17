import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
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
          options={({ route }) => ({
            title: route.params?.title || 'Playground',
          })}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
