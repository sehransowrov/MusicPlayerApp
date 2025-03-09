import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, { 
  useAnimatedStyle, 
  withSpring,
  withTiming,
  interpolate
} from 'react-native-reanimated';

const routes = [
  { name: 'Songs', route: 'Songs' },
  { name: 'Favorites', route: 'Favorites' },
  { name: 'Playlists', route: 'Playlists' },
  { name: 'Folders', route: 'Folders' },
  { name: 'Editor', route: 'Editor' },
  { name: 'Settings', route: 'Settings' },
];

export default function Sidebar() {
  const navigation = useNavigation();
  const route = useRoute();

  const handleNavigation = (targetRoute: string, index: number) => {
    const currentIndex = routes.findIndex(r => r.route === route.name);
    const direction = index > currentIndex ? 'up' : 'down';
    
    navigation.navigate(targetRoute, {
      animation: direction
    });
  };

  return (
    <View style={styles.sidebar}>
      {routes.map((item, index) => {
        const isActive = route.name === item.route;
        
        return (
          <TouchableOpacity
            key={item.route}
            style={[
              styles.sidebarItem,
              isActive && styles.sidebarItemActive
            ]}
            onPress={() => handleNavigation(item.route, index)}
          >
            <Text style={[
              styles.sidebarText,
              isActive && styles.sidebarTextActive
            ]}>
              {item.name}
            </Text>
            {isActive && (
              <View style={styles.activeIndicator} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 50,
    backgroundColor: '#1e1e1e',
    height: '100%',
    paddingTop: 20,
  },
  sidebarItem: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  sidebarItemActive: {
    backgroundColor: '#2d2d2d',
  },
  sidebarText: {
    color: '#858585',
    transform: [{ rotate: '-90deg' }],
    width: 120,
    textAlign: 'center',
    fontSize: 16,
  },
  sidebarTextActive: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  activeIndicator: {
    position: 'absolute',
    left: 0,
    width: 2,
    height: '100%',
    backgroundColor: '#007acc',
  },
});