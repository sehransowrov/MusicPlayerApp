import { View, Text, StyleSheet } from 'react-native';
import Sidebar from '../components/Sidebar';
import { MaterialIcons } from '@expo/vector-icons';

export default function FoldersScreen() {
  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={styles.content}>
        <MaterialIcons name="folder" size={64} color="#ffd43b" />
        <Text style={styles.text}>Folders</Text>
        <Text style={styles.subText}>Browse your music folders</Text>
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