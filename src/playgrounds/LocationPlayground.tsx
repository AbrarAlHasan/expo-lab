import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const LocationPlayground: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location Services</Text>
        <Text style={styles.description}>
          This playground will contain location and GPS functionality experiments including:
        </Text>
        
        <View style={styles.featureList}>
          <Text style={styles.featureItem}>📍 Current location</Text>
          <Text style={styles.featureItem}>🗺️ Map integration</Text>
          <Text style={styles.featureItem}>📍 Geofencing</Text>
          <Text style={styles.featureItem}>🚶 Step tracking</Text>
          <Text style={styles.featureItem}>🧭 Compass</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  featureList: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
  },
  featureItem: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 8,
    lineHeight: 20,
  },
});

export default LocationPlayground;
