import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding" options={{ title: "Onboarding" }} />
      <Stack.Screen name="index" options={{ title: "Highfash" }} />
    </Stack>
  );
}
