import { Tabs } from "expo-router";
import {
  BookOpen,
  House,
  Newspaper,
  Settings,
  Sparkles,
} from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type TabRoute = "index" | "quran" | "artikel" | "setting" | "ai";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "transparent",
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
      tabBar={(props: any) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Beranda" }} />
      <Tabs.Screen name="quran" options={{ title: "Al-Quran" }} />
      <Tabs.Screen name="artikel" options={{ title: "Artikel" }} />
      <Tabs.Screen name="setting" options={{ title: "Pengaturan" }} />
      <Tabs.Screen name="ai" options={{ title: "AI" }} />
    </Tabs>
  );
}

function CustomTabBar({ state, descriptors, navigation }: any) {
  const icons: Record<TabRoute, React.ComponentType<any>> = {
    index: House,
    quran: BookOpen,
    artikel: Newspaper,
    setting: Settings,
    ai: Sparkles,
  };

  const activeColor = "#556761";
  const inactiveColor = "#9CA3AF";

  return (
    <View
      style={{
        position: "absolute",
        bottom: 25,
        // LEBARKAN DISINI: kurangi angka left dan right agar bar lebih panjang ke samping
        left: 8,
        right: 8,
        flexDirection: "row",
        height: 85,
        alignItems: "center",
      }}
    >
      {/* LEFT GROUP */}
      <View
        style={{
          flex: 1,
          height: "100%",
          backgroundColor: "rgba(243, 244, 238, 0.98)",
          borderRadius: 35,
          flexDirection: "row",
          justifyContent: "space-around", // Membagi ruang icon secara merata
          alignItems: "center",
          paddingHorizontal: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        {state.routes.slice(0, 4).map((route: any, index: number) => {
          const isFocused = state.index === index;
          const routeName = route.name as TabRoute;
          const Icon = icons[routeName];

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(routeName)}
              activeOpacity={1} // Matikan efek feedback tekan agar kaku (tanpa animasi)
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Icon size={26} color={isFocused ? activeColor : inactiveColor} />
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: isFocused ? "900" : "600",
                  marginTop: 4,
                  color: isFocused ? activeColor : inactiveColor,
                }}
              >
                {descriptors[route.key].options.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* AI GROUP */}
      <View
        style={{
          width: 85, // Bisa dinaikkan sedikit untuk melebarkan tombol AI
          height: "100%",
          marginLeft: 8,
          backgroundColor: "rgba(243, 244, 238, 0.98)",
          borderRadius: 35,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ai")}
          activeOpacity={1}
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Sparkles
            size={26}
            color={state.index === 4 ? activeColor : inactiveColor}
          />
          <Text
            style={{
              fontSize: 11,
              fontWeight: state.index === 4 ? "900" : "600",
              marginTop: 4,
              color: state.index === 4 ? activeColor : inactiveColor,
            }}
          >
            AI
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
