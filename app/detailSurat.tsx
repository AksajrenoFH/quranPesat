import { useRouter } from "expo-router";
import {
  Bookmark,
  ChevronLeft,
  Play,
  Square,
  Volume2,
} from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function detailSurat() {
  const router = useRouter();
  const [isPlay, setIsPlay] = useState(false);

  // Data dummy untuk contoh tampilan
  const ayatData = [
    {
      nomor: 1,
      ar: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
      tr: "bismi allaahi alrrahmaani alrrahiimi",
      idn: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.",
    },
    // Tambah ayat lain di sini
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCF6EA" }}>
      <ScrollView style={{ flex: 1 }}>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 20,
            borderBottomWidth: 1,
            borderColor: "rgba(68, 109, 167, 0.2)",
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <ChevronLeft
              size={32}
              color={"#344863a6"}
              onPress={() => router.back()}
            />
            <View>
              <Text
                style={{ fontSize: 18, color: "#344863", fontWeight: "800" }}
              >
                Al-Fatihah
              </Text>
              <Text style={{ fontSize: 12, color: "#344863a6" }}>
                Pembukaan • 7 ayat • Mekah
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 20, color: "#556761", fontWeight: "bold" }}>
            الفاتحة
          </Text>
        </View>

        {/* Audio Button */}
        <Pressable
          onPress={() => setIsPlay(!isPlay)}
          style={{
            backgroundColor: "#556761", // Pakai warna hijau keabuan biar senada
            paddingVertical: 12,
            alignItems: "center",
            marginHorizontal: 20,
            borderRadius: 12,
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          {isPlay ? (
            <Square size={18} color={"#FCF6EA"} fill={"#FCF6EA"} />
          ) : (
            <Volume2 size={18} color={"#FCF6EA"} />
          )}
          <Text style={{ fontSize: 14, color: "#FCF6EA", fontWeight: "700" }}>
            Putar Full Surah
          </Text>
        </Pressable>

        {/* List Ayat */}
        {ayatData.map((item, index) => (
          <View
            key={index}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 15,
              borderBottomWidth: 1,
              borderBottomColor: "rgba(0,0,0,0.05)",
            }}
          >
            {/* Row Nomor & Action */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: "#7A8E87", // Warna lingkaran nomor sesuai gambar
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 12, fontWeight: "bold" }}
                >
                  {item.nomor}
                </Text>
              </View>

              <View style={{ flexDirection: "row", gap: 15 }}>
                <Play size={20} color="#7A8E87" />
                <Bookmark size={20} color="#7A8E87" />
              </View>
            </View>

            {/* Teks Arab */}
            <Text
              style={{
                fontSize: 26,
                color: "#344863",
                textAlign: "right",
                lineHeight: 48,
                fontWeight: "500",
                marginBottom: 15,
              }}
            >
              {item.ar}
            </Text>

            {/* Transliterasi */}
            <Text
              style={{
                fontSize: 14,
                color: "#7A8E87",
                fontStyle: "italic",
                lineHeight: 22,
                marginBottom: 8,
              }}
            >
              {item.tr}
            </Text>

            {/* Arti */}
            <Text
              style={{
                fontSize: 14,
                color: "#344863",
                lineHeight: 22,
              }}
            >
              {item.idn}
            </Text>
          </View>
        ))}

        {/* Padding bawah buat ScrollView */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
