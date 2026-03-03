import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="splash" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(category)/asmaulHusna"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="(category)/doa" options={{ headerShown: false }} />
      <Stack.Screen name="(category)/donasi" options={{ headerShown: false }} />
      <Stack.Screen name="(category)/dzikir" options={{ headerShown: false }} />
      <Stack.Screen name="(category)/hadist" options={{ headerShown: false }} />
      <Stack.Screen name="(category)/kiblat" options={{ headerShown: false }} />
      <Stack.Screen name="(category)/other" options={{ headerShown: false }} />
      <Stack.Screen name="detailSurat" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "Modal" }}
      />
    </Stack>
  );
}
