import { Stack } from "expo-router";
import { useFonts } from "expo-font";
export default function RootLayout() {
  const [loaded,error] = useFonts({
    'Geist-Regular' : require('../assets/fonts/Geist-Regular.ttf'),
    'Geist-Bold' : require('../assets/fonts/Geist-Bold.ttf'),

  })
  return <Stack />;
}
