import { View, Text, StyleSheet } from 'react-native';
import Sidebar from '../components/Sidebar';
import { MaterialIcons } from '@expo/vector-icons';

export default function EditorScreen() {
  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={styles.content}>
        <MaterialIcons name="edit" size={64} color="#63e6be" />
        <Text style={styles.text}>Editor</Text>
        <Text style={styles.subText}>Edit your music metadata</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#252526',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
    color: '#858585',
    fontSize: 16,
  },
});