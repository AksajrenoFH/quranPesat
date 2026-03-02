import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated, Easing, View } from "react-native";

export default function Splash() {
  const router = useRouter();

  // Inisialisasi nilai untuk animasi
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Looping animasi
    Animated.loop(
      Animated.parallel([
        // Animation Rounding
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        // Animation Scale
        Animated.sequence([
          Animated.timing(scaleAnim, {
            toValue: 1.2,
            duration: 750,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 750,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ).start();

    // Pindah ke tab uta,a
    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 5000);

    // return () => clearTimeout(timer);
  }, [rotateAnim, scaleAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8B6D56",
      }}
    >
      {/* Logo */}
      <Image
        source={require("./../assets/logo/logo.png")}
        style={{ width: 270, height: 270 }}
      />

      {/* Loading animation */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Animated.View
          style={{
            width: 50,
            height: 50,
            borderRadius: 100,
            borderWidth: 4,
            borderColor: "#FFE475",
            borderTopColor: "transparent",
            transform: [{ rotate: spin }, { scale: scaleAnim }],
          }}
        />
        <Animated.Text
          style={{
            color: "#FFE475",
            marginTop: 20,
            fontWeight: "600",
            opacity: scaleAnim,
          }}
        >
          Tunggu Sebentar
        </Animated.Text>
      </View>
    </View>
  );
}
