import { useRouter } from "expo-router";
import {
  AudioLines,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Heart,
  Music,
  Palette,
} from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function settingQuran() {
  const router = useRouter();

  // State dibikin satu-satu biar gak gerak barengan semua
  const [isModeQuran, setIsModeQuran] = useState(false);
  const [isWarnaTajwid, setIsWarnaTajwid] = useState(false);
  const [isSuaraAktif, setIsSuaraAktif] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCF6EA" }}>
      <ScrollView>
        {/* hider */}
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#E5E7EB",
            paddingBottom: 12,
            paddingHorizontal: 16,
            paddingTop: 10,
            backgroundColor: "#FCF6EA",
          }}
        >
          <TouchableOpacity onPress={() => router.replace("/(tabs)/quran")}>
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
            Pengaturan Al-Quran
          </Text>
        </View>

        <View style={{ flex: 1, padding: 20 }}>
          {/* tampilan, awas demam panggung */}
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#7F7E7D",
                marginBottom: 10,
                letterSpacing: 0.5,
              }}
            >
              TAMPILAN
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: 16,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomWidth: 1,
                borderBottomColor: "#F3F4F6",
              }}
            >
              <View
                style={{
                  backgroundColor: "#42605E15",
                  padding: 8,
                  borderRadius: 10,
                }}
              >
                <BookOpen size={24} color="#42605E" />
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color: "#344863" }}
                >
                  Mode Al-Quran
                </Text>
                <Text style={{ fontSize: 12, color: "#7F7E7D" }}>
                  Sembunyikan latin & arti
                </Text>
              </View>
              <Switch
                trackColor={{ false: "#d1d1d1", true: "#42605E" }}
                onValueChange={() => setIsModeQuran(!isModeQuran)}
                value={isModeQuran}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: 16,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: "#42605E15",
                  padding: 8,
                  borderRadius: 10,
                }}
              >
                <Palette size={24} color="#42605E" />
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color: "#344863" }}
                >
                  Warna Tajwid
                </Text>
                <Text style={{ fontSize: 12, color: "#7F7E7D" }}>
                  Tandai tajwid dengan warna
                </Text>
              </View>
              <Switch
                trackColor={{ false: "#d1d1d1", true: "#42605E" }}
                onValueChange={() => setIsWarnaTajwid(!isWarnaTajwid)}
                value={isWarnaTajwid}
              />
            </View>
          </View>

          {/* suara rakyat ekcil */}
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#7F7E7D",
                marginBottom: 10,
              }}
            >
              AUDIO
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: 16,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                borderBottomWidth: 1,
                borderBottomColor: "#F3F4F6",
              }}
            >
              <View
                style={{
                  backgroundColor: "#42605E15",
                  padding: 8,
                  borderRadius: 10,
                }}
              >
                <Music size={24} color="#42605E" />
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color: "#344863" }}
                >
                  Suara Aktif
                </Text>
                <Text style={{ fontSize: 12, color: "#7F7E7D" }}>
                  Aktifkan efek suara
                </Text>
              </View>
              <Switch
                trackColor={{ false: "#d1d1d1", true: "#42605E" }}
                onValueChange={() => setIsSuaraAktif(!isSuaraAktif)}
                value={isSuaraAktif}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: 16,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: "#42605E15",
                  padding: 8,
                  borderRadius: 10,
                }}
              >
                <AudioLines size={24} color="#42605E" />
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color: "#344863" }}
                >
                  Auto Play Audio
                </Text>
                <Text style={{ fontSize: 12, color: "#7F7E7D" }}>
                  Putar audio otomatis
                </Text>
              </View>
              <Switch
                trackColor={{ false: "#d1d1d1", true: "#42605E" }}
                onValueChange={() => setIsAutoPlay(!isAutoPlay)}
                value={isAutoPlay}
              />
            </View>
          </View>

          {/* de el el */}
          <View style={{ marginBottom: 24 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#7F7E7D",
                marginBottom: 10,
              }}
            >
              LAINNYA
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: 16,
                borderRadius: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: "#42605E15",
                  padding: 8,
                  borderRadius: 10,
                }}
              >
                <Heart size={24} color="#42605E" />
              </View>
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 16, color: "#344863" }}
                >
                  Bookmark
                </Text>
                <Text style={{ fontSize: 12, color: "#7F7E7D" }}>
                  Lihat ayat yang disimpan
                </Text>
              </View>
              <ChevronRight size={18} color="#0000008e" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
