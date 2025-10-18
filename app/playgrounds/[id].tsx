import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, Stack } from "expo-router";
import ReactNativeAudioPlayground from "../../src/playgrounds/ReactNativeAudioPlayground";
import CameraPlayground from "../../src/playgrounds/CameraPlayground";
import LocationPlayground from "../../src/playgrounds/LocationPlayground";
import NotificationPlayground from "../../src/playgrounds/NotificationPlayground";
import ExpoAudioRoutePlayground from "../../src/playgrounds/ExpoAudioRoutePlayground";

export default function PlaygroundScreen() {
  const { id, title, description, category, screenName } =
    useLocalSearchParams<{
      id: string;
      title: string;
      description: string;
      category: string;
      screenName: string;
    }>();

  const renderPlaygroundContent = () => {
    switch (screenName) {
      case "ReactNativeAudioPlayground":
        return <ReactNativeAudioPlayground />;
      case "CameraPlayground":
        return <CameraPlayground />;
      case "LocationPlayground":
        return <LocationPlayground />;
      case "NotificationPlayground":
        return <NotificationPlayground />;
      case "ExpoAudioRoutePlayground":
        return <ExpoAudioRoutePlayground />;
      default:
        return (
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderTitle}>Coming Soon!</Text>
            <Text style={styles.placeholderText}>
              This playground is under development.
            </Text>
            <Text style={styles.placeholderSubtext}>
              {title} - {description}
            </Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{ title: typeof title === "string" ? title : "Playground" }}
      />
      <View style={styles.header}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {renderPlaygroundContent()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  category: {
    fontSize: 12,
    color: "#007AFF",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  placeholderTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  placeholderText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 8,
  },
  placeholderSubtext: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    fontStyle: "italic",
  },
});
