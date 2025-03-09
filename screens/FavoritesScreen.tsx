import { View, Text, StyleSheet } from 'react-native';
import Sidebar from '../components/Sidebar';
import { AntDesign } from '@expo/vector-icons';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={styles.content}>
        <AntDesign name="heart" size={64} color="#ff6b6b" />
        <Text style={styles.text}>Favorites</Text>
        <Text style={styles.subText}>Your favorite tracks appear here</Text>
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