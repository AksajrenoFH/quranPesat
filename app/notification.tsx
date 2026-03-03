import { useRouter } from "expo-router";
import {
    Bell,
    BookOpen,
    ChevronLeft,
    Clock,
    MessageSquareQuote,
    Moon,
    Sun,
} from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Notifikasi() {
  const router = useRouter();

  const [isWaktuSholat, setIsWaktuSholat] = useState(true);
  const [isAyatHarian, setIsAyatHarian] = useState(true);
  const [isPengingatTadarus, setIsPengingatTadarus] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCF6EA" }}>
      <ScrollView>
        {/* Header */}
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            paddingBottom: 12,
            paddingHorizontal: 16,
            paddingTop: 10,
            backgroundColor: "#FCF6EA",
          }}
        >
          <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
            <ChevronLeft size={32} color={"#344863"} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#344863",
              marginLeft: 10,
            }}
          >
            Notifikasi
          </Text>
        </View>

        <View style={{ padding: 20 }}>
          {/* Pengaturan Notifikasi */}
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 16,
              padding: 16,
              marginBottom: 24,
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: "#344863", marginBottom: 16 }}
            >
              Pengaturan Notifikasi
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Bell size={20} color="#788C8D" />
              <Text style={{ flex: 1, marginLeft: 12, color: "#344863" }}>
                Waktu Sholat
              </Text>
              <Switch
                trackColor={{ false: "#d1d1d1", true: "#73868e" }}
                onValueChange={() => setIsWaktuSholat(!isWaktuSholat)}
                value={isWaktuSholat}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <BookOpen size={20} color="#788C8D" />
              <Text style={{ flex: 1, marginLeft: 12, color: "#344863" }}>
                Ayat Harian
              </Text>
              <Switch
                trackColor={{ false: "#d1d1d1", true: "#73868e" }}
                onValueChange={() => setIsAyatHarian(!isAyatHarian)}
                value={isAyatHarian}
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Clock size={20} color="#788C8D" />
              <Text style={{ flex: 1, marginLeft: 12, color: "#344863" }}>
                Pengingat Tadarus
              </Text>
              <Switch
                trackColor={{ false: "#d1d1d1", true: "#73868e" }}
                onValueChange={() => setIsPengingatTadarus(!isPengingatTadarus)}
                value={isPengingatTadarus}
              />
            </View>
          </View>

          <Text
            style={{ fontWeight: "bold", color: "#344863", marginBottom: 16 }}
          >
            Notifikasi Terbaru
          </Text>

          {/* Waktu Dzuhur */}
          <View
            style={{
              backgroundColor: "#EDEBDF",
              padding: 16,
              borderRadius: 16,
              marginBottom: 12,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                backgroundColor: "#D6D7D1",
                padding: 10,
                borderRadius: 100,
                alignSelf: "flex-start",
              }}
            >
              <Sun size={24} color="#788C8D" />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Waktu Dzuhur
                </Text>
                <Text style={{ fontSize: 12, color: "#7F7E7D" }}>12:05 ●</Text>
              </View>
              <Text style={{ fontSize: 13, color: "#4B5563", marginTop: 4 }}>
                Waktu sholat Dzuhur telah tiba. Jangan lupa untuk menunaikan
                sholat.
              </Text>
            </View>
          </View>

          {/* Ayat Hari Ini */}
          <View
            style={{
              backgroundColor: "#EDEBDF",
              padding: 16,
              borderRadius: 16,
              marginBottom: 12,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                backgroundColor: "#D6D7D1",
                padding: 10,
                borderRadius: 100,
                alignSelf: "flex-start",
              }}
            >
              <MessageSquareQuote size={24} color="#788C8D" />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Ayat Hari Ini
                </Text>
                <Text style={{ fontSize: 12, color: "#7F7E7D" }}>05:00 ●</Text>
              </View>
              <Text
                style={{
                  fontSize: 13,
                  color: "#4B5563",
                  marginTop: 4,
                  fontStyle: "italic",
                }}
              >
                "Dan bersabarlah, sesungguhnya Allah beserta orang-orang yang
                sabar." - QS. Al-Anfal: 46
              </Text>
            </View>
          </View>

          {/* Waktu Subuh */}
          <View
            style={{
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 16,
              marginBottom: 12,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#F3F4F6",
            }}
          >
            <View
              style={{
                backgroundColor: "#F3F4F6",
                padding: 10,
                borderRadius: 100,
                alignSelf: "flex-start",
              }}
            >
              <Moon size={24} color="#788C8D" />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Waktu Subuh
                </Text>
                <Text style={{ fontSize: 12, color: "#7F7E7D" }}>04:30</Text>
              </View>
              <Text style={{ fontSize: 13, color: "#7F7E7D", marginTop: 4 }}>
                Waktu sholat Subuh telah tiba. Bangun dan raih keberkahan pagi.
              </Text>
            </View>
          </View>

          {/* Pengingat Tadarus - INI YANG BARU */}
          <View
            style={{
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 16,
              marginBottom: 12,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#F3F4F6",
            }}
          >
            <View
              style={{
                backgroundColor: "#F3F4F6",
                padding: 10,
                borderRadius: 100,
                alignSelf: "flex-start",
              }}
            >
              <Clock size={24} color="#788C8D" />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Pengingat Tadarus
                </Text>
                <Text style={{ fontSize: 12, color: "#7F7E7D" }}>20:00</Text>
              </View>
              <Text style={{ fontSize: 13, color: "#7F7E7D", marginTop: 4 }}>
                Sudahkah kamu membaca Al-Quran hari ini? Yuk lanjutkan bacaanmu.
              </Text>
            </View>
          </View>

          {/* Waktu Maghrib - INI JUGA BARU */}
          <View
            style={{
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 16,
              marginBottom: 12,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#F3F4F6",
            }}
          >
            <View
              style={{
                backgroundColor: "#F3F4F6",
                padding: 10,
                borderRadius: 100,
                alignSelf: "flex-start",
              }}
            >
              <Moon size={24} color="#788C8D" />
            </View>
            <View style={{ flex: 1, marginLeft: 12 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Waktu Maghrib
                </Text>
                <Text style={{ fontSize: 12, color: "#7F7E7D" }}>17:55</Text>
              </View>
              <Text style={{ fontSize: 13, color: "#7F7E7D", marginTop: 4 }}>
                Waktu sholat Maghrib telah tiba. Segera tunaikan sholat.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
