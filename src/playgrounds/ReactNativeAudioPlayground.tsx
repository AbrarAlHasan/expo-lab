import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

const ReactNativeAudioPlayground: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recordings, setRecordings] = useState<string[]>([]);

  const startRecording = () => {
    setIsRecording(true);
    Alert.alert('Recording Started', 'Audio recording has begun. This is a placeholder implementation.');
  };

  const stopRecording = () => {
    setIsRecording(false);
    const newRecording = `Recording_${Date.now()}.m4a`;
    setRecordings(prev => [...prev, newRecording]);
    Alert.alert('Recording Stopped', `Saved as: ${newRecording}`);
  };

  const playRecording = (recording: string) => {
    setIsPlaying(true);
    Alert.alert('Playing Audio', `Playing: ${recording}\n\nThis is a placeholder implementation.`);
    setTimeout(() => setIsPlaying(false), 2000);
  };

  const deleteRecording = (recording: string) => {
    Alert.alert(
      'Delete Recording',
      `Are you sure you want to delete ${recording}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setRecordings(prev => prev.filter(r => r !== recording));
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Audio Recording</Text>
        
        <View style={styles.controlsContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.recordButton,
              isRecording && styles.recordButtonActive,
            ]}
            onPress={isRecording ? stopRecording : startRecording}
          >
            <Text style={styles.buttonText}>
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.infoText}>
          This is a placeholder implementation for React Native Audio.
          In a real implementation, you would integrate with libraries like:
        </Text>
        
        <View style={styles.libraryList}>
          <Text style={styles.libraryItem}>• react-native-audio-recorder-player</Text>
          <Text style={styles.libraryItem}>• expo-av</Text>
          <Text style={styles.libraryItem}>• react-native-sound</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recordings ({recordings.length})</Text>
        
        {recordings.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No recordings yet</Text>
            <Text style={styles.emptySubtext}>Start recording to see your audio files here</Text>
          </View>
        ) : (
          recordings.map((recording, index) => (
            <View key={index} style={styles.recordingItem}>
              <View style={styles.recordingInfo}>
                <Text style={styles.recordingName}>{recording}</Text>
                <Text style={styles.recordingDuration}>00:00</Text>
              </View>
              
              <View style={styles.recordingActions}>
                <TouchableOpacity
                  style={[styles.actionButton, styles.playButton]}
                  onPress={() => playRecording(recording)}
                  disabled={isPlaying}
                >
                  <Text style={styles.actionButtonText}>
                    {isPlaying ? 'Playing...' : 'Play'}
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[styles.actionButton, styles.deleteButton]}
                  onPress={() => deleteRecording(recording)}
                >
                  <Text style={styles.actionButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Implementation Notes</Text>
        <View style={styles.notesContainer}>
          <Text style={styles.noteItem}>
            📱 This playground demonstrates the structure for audio functionality
          </Text>
          <Text style={styles.noteItem}>
            🎵 Real implementation would require native audio libraries
          </Text>
          <Text style={styles.noteItem}>
            🔧 Prebuild configuration allows for native module integration
          </Text>
          <Text style={styles.noteItem}>
            📁 Each playground can have its own folder with components
          </Text>
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
  controlsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 150,
    alignItems: 'center',
  },
  recordButton: {
    backgroundColor: '#FF3B30',
  },
  recordButtonActive: {
    backgroundColor: '#FF6B6B',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  libraryList: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
  },
  libraryItem: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 4,
  },
  emptyState: {
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
  },
  recordingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  recordingInfo: {
    flex: 1,
  },
  recordingName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 2,
  },
  recordingDuration: {
    fontSize: 12,
    color: '#666',
  },
  recordingActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    minWidth: 60,
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: '#007AFF',
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  notesContainer: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
  },
  noteItem: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 8,
    lineHeight: 20,
  },
});

export default ReactNativeAudioPlayground;
