import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ChevronLeft, Share2 } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function donasi() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCF6EA" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 20,
            borderBottomWidth: 1,
            borderColor: "#446da7c9",
            paddingBottom: 20,
          }}
        >
          <ChevronLeft
            onPress={() => router.replace("/(tabs)")}
            size={32}
            color={"#344863a6"}
          />

          <Text
            style={{
              fontSize: 14,
              color: "#344863",
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            Dukung Developer
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Share2 size={20} color={"#344863a6"} />
          </View>
        </View>

        {/* Milestone */}
        <View
          style={{
            padding: 20,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#446da7c9",
            margin: 16,
            marginBottom: 20,
            gap: 12,
            borderRadius: 16,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "800" }}>
            Milestone Dukungan
          </Text>
          <Text style={{ fontSize: 14, color: "#344863a6" }}>
            Quran Pesat adalah aplikasi gratis tanpa iklan yang dibuat dengan
            penuh cinta
          </Text>
          <Image
            source={require("./../../assets/images/milestone.png")}
            style={{ width: "95%", height: 70, alignSelf: "center" }}
          />
        </View>

        {/* qeris */}
        <Text
          style={{
            marginTop: 16,
            fontSize: 16,
            paddingHorizontal: 20,
            fontWeight: 700,
          }}
        >
          Dukungan Via Saweria
        </Text>
        <View
          style={{
            padding: 20,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#446da7c9",
            margin: 16,
            marginBottom: 20,
            gap: 12,
            borderRadius: 16,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "800" }}>
            Scan QR atau buka Saweria
          </Text>
          <Text style={{ fontSize: 14, color: "#344863a6" }}>
            Semua dukungan akan masuk langsung ke halaman saweria
          </Text>
          <Image
            source={require("./../../assets/images/saweria.png")}
            style={{ width: 175, height: 175, alignSelf: "center" }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "800",
              textAlign: "center",
              backgroundColor: "#446da7c9",
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 16,
              color: "#fff",
              alignSelf: "center",
              width: "80%",
            }}
          >
            Buka Saweria
          </Text>
        </View>

        {/* Chathathanz */}
        <View
          style={{
            padding: 20,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#446da7c9",
            margin: 16,
            marginBottom: 20,
            gap: 12,
            borderRadius: 16,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "800" }}>
            Catatan Development & Transparansi
          </Text>
          <View style={{ gap: 8 }}>
            <Text style={{ fontSize: 14, color: "#344863a6" }}>
              1. Ini dukungan untuk developer, bukan penggalangan donasi lembaga
            </Text>
            <Text style={{ fontSize: 14, color: "#344863a6" }}>
              2. Penyaluran ke pihak lain sepenuhnya keputusan pribadi developer
            </Text>
          </View>
        </View>

        {/* liderbroad */}
        <View
          style={{
            padding: 20,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#446da7c9",
            margin: 16,
            marginBottom: 20,
            gap: 12,
            borderRadius: 16,
          }}
        >
          <View style={{ marginBottom: 4 }}>
            <Text style={{ fontSize: 16, fontWeight: "800", color: "#344863" }}>
              Leaderboard Dukungan
            </Text>
            <Text style={{ fontSize: 13, color: "#344863a6", marginTop: 2 }}>
              Terimakasih untuk para pendukung teratas
            </Text>
          </View>

          <View style={{ gap: 10 }}>
            {/*  { nama: "Hamba Allah", total: "Rp 500.000" },
      { nama: "Zidni", total: "Rp 250.000" },
       { nama: "Fulan", total: "Rp 100.000" },
      { nama: "Anonim", total: "Rp 50.000" },
      { nama: "User01", total: "Rp 25.000" }, */}
            {/* SIji */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 8,
                borderBottomWidth: 1,
                borderBottomColor: "#f0f0f0",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: "#FFD700",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 12, fontWeight: "800", color: "#fff" }}
                  >
                    1
                  </Text>
                </View>
                <Text
                  style={{ fontSize: 14, fontWeight: "600", color: "#344863" }}
                >
                  Hamba Allah
                </Text>
              </View>

              <Text
                style={{ fontSize: 14, fontWeight: "800", color: "#446da7" }}
              >
                Rp 50.000
              </Text>
            </View>
            {/* Loro */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 8,
                borderBottomWidth: 1,
                borderBottomColor: "#f0f0f0",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: "#C0C0C0",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 12, fontWeight: "800", color: "#fff" }}
                  >
                    2
                  </Text>
                </View>
                <Text
                  style={{ fontSize: 14, fontWeight: "600", color: "#344863" }}
                >
                  Qul Huwa Allaahu Ahad
                </Text>
              </View>

              <Text
                style={{ fontSize: 14, fontWeight: "800", color: "#446da7" }}
              >
                Rp 49.000
              </Text>
            </View>
            {/* Tree */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 8,
                borderBottomWidth: 1,
                borderBottomColor: "#f0f0f0",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: "#CD7F32",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ fontSize: 12, fontWeight: "800", color: "#fff" }}
                  >
                    3
                  </Text>
                </View>
                <Text
                  style={{ fontSize: 14, fontWeight: "600", color: "#344863" }}
                >
                  Allaahu Samad
                </Text>
              </View>

              <Text
                style={{ fontSize: 14, fontWeight: "800", color: "#446da7" }}
              >
                Rp 48.000
              </Text>
            </View>
            {/* Fo */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 8,
                borderBottomWidth: 1,
                borderBottomColor: "#f0f0f0",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: "#446da720",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "800",
                      color: "#344863",
                    }}
                  >
                    4
                  </Text>
                </View>
                <Text
                  style={{ fontSize: 14, fontWeight: "600", color: "#344863" }}
                >
                  Lam Yalid Walam Yuulad
                </Text>
              </View>

              <Text
                style={{ fontSize: 14, fontWeight: "800", color: "#446da7" }}
              >
                Rp 47.000
              </Text>
            </View>
            {/* Faivu */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 8,
                borderBottomWidth: 1,
                borderBottomColor: "#f0f0f0",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
              >
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: "#446da720",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "800",
                      color: "#344863",
                    }}
                  >
                    5
                  </Text>
                </View>
                <Text
                  style={{ fontSize: 14, fontWeight: "600", color: "#344863" }}
                >
                  Walam Yakullahu Kufuwan Ahad
                </Text>
              </View>

              <Text
                style={{ fontSize: 14, fontWeight: "800", color: "#446da7" }}
              >
                Rp 46.000
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
