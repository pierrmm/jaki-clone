import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)/profile" options={{ headerTitle: 'Profile' }} />
        <Stack.Screen name="+not-found" options={{ title: 'not found' }} />
        <Stack.Screen name="project/jakwarta" options={{ headerTitle: 'JakWarta' }} />
        <Stack.Screen name="project/jakrespons" options={{ headerTitle: 'JakRespons' }} />
        <Stack.Screen name="project/jakpangan" options={{ headerTitle: 'JakPangan' }} />
        <Stack.Screen name="project/jaklingko" options={{ headerTitle: 'JakLingko' }} />
        <Stack.Screen name="project/jaksiaga" options={{ headerTitle: 'JakSiaga' }} />
        <Stack.Screen name="project/jakemisi" options={{ headerTitle: 'JakEmisi' }} />
        <Stack.Screen name="project/detail" options={{ headerTitle: 'Detail' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
