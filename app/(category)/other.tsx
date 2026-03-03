import { useRouter } from "expo-router";
import {
  BookOpen,
  BookOpenText,
  Calculator,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Coins,
  Compass,
  Heart,
  MessageCircle,
  PlayCircle,
  Scroll,
  Settings,
} from "lucide-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Other() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCF6EA" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          padding: 20,
          borderBottomWidth: 1,
          borderColor: "#446da7c9",
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <ChevronLeft
            size={32}
            color={"#344863a6"}
            onPress={() => router.replace("/(tabs)")}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "#344863",
                fontWeight: "800",
              }}
            >
              Lainnya
            </Text>
          </View>
        </View>
        <Settings size={26} color={"#344863a6"} />
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          paddingVertical: 20,
        }}
      >
        <Pressable
          onPress={() => router.push("/(tabs)/quran")}
          style={{ width: "25%", alignItems: "center", marginBottom: 20 }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <BookOpen size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Al-Quran
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/(category)/doa")}
          style={{ width: "25%", alignItems: "center", marginBottom: 20 }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <MessageCircle size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Doa Harian
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/(category)/dzikir")}
          style={{ width: "25%", alignItems: "center", marginBottom: 20 }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <Heart size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Dzikir Dhuha
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/(category)/hadist")}
          style={{ width: "25%", alignItems: "center", marginBottom: 20 }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <Scroll size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Hadist
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/(category)/kiblat")}
          style={{ width: "25%", alignItems: "center", marginBottom: 20 }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <Compass size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Arah Kiblat
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/(category)/donasi")}
          style={{ width: "25%", alignItems: "center", marginBottom: 20 }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <Coins size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Donasi
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/(category)/asmaulHusna")}
          style={{ width: "25%", alignItems: "center", marginBottom: 20 }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <BookOpenText size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Asmaul Husna
          </Text>
        </Pressable>
      </View>
      <View style={{ marginBottom: 20, gap: 12, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 12, fontWeight: "bold", color: "#444" }}>
          LAINNYA
        </Text>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: "#EAE7DEa6",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#C9C9C9a6",
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CalendarDays size={28} color="#778B8A" />
          </View>
          <View style={{ marginLeft: 15, flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Kalender Hijriah
            </Text>
            <Text style={{ fontSize: 10, color: "#444444a6" }}>
              Tanggal hijriah hari ini dan info singkat
            </Text>
          </View>
          <ChevronRight size={28} color="#778B8A" fill={"#BCC6BE"} />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: "#EAE7DEa6",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#C9C9C9a6",
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Calculator size={28} color="#778B8A" />
          </View>
          <View style={{ marginLeft: 15, flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Kalkulator Zakat
            </Text>
            <Text style={{ fontSize: 10, color: "#444444a6" }}>
              Hitung zakat mal dengan cepat
            </Text>
          </View>
          <ChevronRight size={28} color="#778B8A" fill={"#BCC6BE"} />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: "#EAE7DEa6",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#C9C9C9a6",
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PlayCircle size={28} color="#778B8A" />
          </View>
          <View style={{ marginLeft: 15, flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Kajian Online
            </Text>
            <Text style={{ fontSize: 10, color: "#444444a6" }}>
              Akses kajian dari berbagai sumber
            </Text>
          </View>
          <ChevronRight size={28} color="#778B8A" fill={"#BCC6BE"} />
        </View>
      </View>
    </SafeAreaView>
  );
}
