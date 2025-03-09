import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Toaster } from 'sonner-native';
import SongsScreen from "./screens/SongsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import PlaylistsScreen from "./screens/PlaylistsScreen";
import FoldersScreen from "./screens/FoldersScreen";
import EditorScreen from "./screens/EditorScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createNativeStackNavigator();

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return {
    cardStyle: {
      transform: [
        {
          translateY: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [screen.height, 0],
          }),
        },
      ],
    },
  };
};

function RootStack() {
  return (
    <Stack.Navigator 
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateY: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.height, 0],
                  }),
                },
              ],
            },
          };
        },
      })}
    >
      <Stack.Screen name="Songs" component={SongsScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Playlists" component={PlaylistsScreen} />
      <Stack.Screen name="Folders" component={FoldersScreen} />
      <Stack.Screen name="Editor" component={EditorScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Toaster />
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252526',
  }
});