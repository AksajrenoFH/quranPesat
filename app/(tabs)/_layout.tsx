import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import {
  BookOpen,
  House,
  LucideIcon,
  Newspaper,
  Settings,
  Sparkles,
} from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type TabRoute = "index" | "quran" | "artikel" | "settings" | "ai";

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
      tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" options={{ title: "Beranda" }} />
      <Tabs.Screen name="quran" options={{ title: "Al-Quran" }} />
      <Tabs.Screen name="artikel" options={{ title: "Artikel" }} />
      <Tabs.Screen name="settings" options={{ title: "Setelan" }} />
      <Tabs.Screen name="ai" options={{ title: "AI" }} />
    </Tabs>
  );
}

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const currentRouteName = state.routes[state.index].name;

  if (currentRouteName === "ai") {
    // Sembunyikan tab bar untuk route "ai"
    return null;
  }

  const icons: Record<TabRoute, LucideIcon> = {
    index: House,
    quran: BookOpen,
    artikel: Newspaper,
    settings: Settings,
    ai: Sparkles,
  };

  const activeColor = "#556761";
  const inactiveColor = "#9CA3AF";

  return (
    <View
      style={{
        position: "absolute",
        bottom: 25,
        left: 8,
        right: 8,
        flexDirection: "row",
        height: 85,
        alignItems: "center",
      }}
    >
      {/* LEFT GROUP (Main Tabs) */}
      <View
        style={{
          flex: 1,
          height: "100%",
          backgroundColor: "rgba(243, 244, 238, 0.98)",
          borderRadius: 35,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingHorizontal: 5,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
        }}
      >
        {state.routes.map((route, index) => {
          // Hanya render 4 tab pertama di grup kiri
          if (index >= 4) return null;

          const isFocused = state.index === index;
          const routeName = route.name as TabRoute;
          const Icon = icons[routeName];
          const label = descriptors[route.key].options.title || route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // PAKAI NAVIGATE, JANGAN PUSH
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              activeOpacity={1}
              style={{
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Icon size={24} color={isFocused ? activeColor : inactiveColor} />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: isFocused ? "900" : "600",
                  marginTop: 4,
                  color: isFocused ? activeColor : inactiveColor,
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* RIGHT GROUP (AI Button) */}
      <View
        style={{
          width: 85,
          height: "100%",
          marginLeft: 8,
          backgroundColor: "rgba(243, 244, 238, 0.98)",
          borderRadius: 35,
          justifyContent: "center",
          alignItems: "center",
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
        }}
      >
        {(() => {
          const aiRoute = state.routes.find((r) => r.name === "ai");
          const aiIndex = state.routes.findIndex((r) => r.name === "ai");
          const isAiFocused = state.index === aiIndex;

          return (
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
                color={isAiFocused ? activeColor : inactiveColor}
              />
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: isAiFocused ? "900" : "600",
                  marginTop: 4,
                  color: isAiFocused ? activeColor : inactiveColor,
                }}
              >
                AI
              </Text>
            </TouchableOpacity>
          );
        })()}
      </View>
    </View>
  );
}
