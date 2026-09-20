import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import "../global.css";
export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor={"black"} barStyle={"dark-content"} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" options={{ title: "Onboarding" }} />
        <Stack.Screen name="index" options={{ title: "Highfash" }} />
      </Stack>
    </React.Fragment>
  );
}
