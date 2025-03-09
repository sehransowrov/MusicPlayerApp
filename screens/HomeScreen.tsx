import { View, StyleSheet } from 'react-native';
import Sidebar from '../components/Sidebar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={styles.content}>
        {/* Content will be rendered here */}
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
  },
});