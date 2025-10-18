import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { PlaygroundItem } from '../src/types';

const playgroundItems: PlaygroundItem[] = [
  {
    id: 'react-native-audio',
    title: 'React Native Audio',
    description: 'Audio recording and playback experiments',
    category: 'Media',
    screenName: 'ReactNativeAudioPlayground',
  },
  {
    id: 'camera-experiments',
    title: 'Camera Experiments',
    description: 'Camera functionality and image processing',
    category: 'Media',
    screenName: 'CameraPlayground',
  },
  {
    id: 'location-services',
    title: 'Location Services',
    description: 'GPS and location tracking features',
    category: 'Sensors',
    screenName: 'LocationPlayground',
  },
  {
    id: 'push-notifications',
    title: 'Push Notifications',
    description: 'Local and remote notification handling',
    category: 'Communication',
    screenName: 'NotificationPlayground',
  },
  {
    id: 'audio-route',
    title: 'Audio Route',
    description: 'Audio route functionality experiments',
    category: 'Media',
    screenName: 'ExpoAudioRoutePlayground',
  },
];

export default function MainScreen() {
  const navigateToPlayground = (item: PlaygroundItem) => {
    router.push({
      pathname: '/playgrounds/[id]',
      params: {
        id: item.id,
        title: item.title,
        description: item.description,
        category: item.category,
        screenName: item.screenName,
      },
    });
  };

  const renderPlaygroundItem = ({ item }: { item: PlaygroundItem }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigateToPlayground(item)}
    >
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemCategory}>{item.category}</Text>
      </View>
      <Text style={styles.arrow}>→</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Expo Lab Playground</Text>
        <Text style={styles.subtitle}>POC Experiments & Testing</Text>
      </View>
      
      <FlatList
        data={playgroundItems}
        renderItem={renderPlaygroundItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  listContainer: {
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  itemCategory: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '500',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  arrow: {
    fontSize: 20,
    color: '#007AFF',
    marginLeft: 12,
  },
});
