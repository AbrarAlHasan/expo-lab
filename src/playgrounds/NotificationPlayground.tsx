import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const NotificationPlayground: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Push Notifications</Text>
        <Text style={styles.description}>
          This playground will contain notification functionality experiments including:
        </Text>
        
        <View style={styles.featureList}>
          <Text style={styles.featureItem}>🔔 Local notifications</Text>
          <Text style={styles.featureItem}>📱 Push notifications</Text>
          <Text style={styles.featureItem}>⏰ Scheduled notifications</Text>
          <Text style={styles.featureItem}>🎯 Notification actions</Text>
          <Text style={styles.featureItem}>📊 Notification analytics</Text>
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
    shadowColor: '#333',
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

export default NotificationPlayground;
