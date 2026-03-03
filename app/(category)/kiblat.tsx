import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { ChevronLeft, EllipsisVertical, MapPin } from "lucide-react-native";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Kiblat() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("./../../assets/images/kabah.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", flex: 1 }}>
        {/* header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 40,
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
          <Text style={{ fontSize: 16, color: "#344863", fontWeight: "800" }}>
            Arah Kiblat
          </Text>
          <EllipsisVertical size={20} color={"#344863a6"} />
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
        >
          <View style={{ alignItems: "center", gap: 8 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <MapPin size={26} color={"#344863"} />
              <Text
                style={{ fontSize: 18, fontWeight: "700", color: "#344863" }}
              >
                Bogor, Indonesia
              </Text>
            </View>
            <Text style={{ fontSize: 16, color: "#344863" }}>
              Sudut Kiblat: 295°
            </Text>
          </View>

          {/* kompas.com */}
          <View
            style={{
              width: 300,
              height: 300,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./../../assets/images/compass.png")}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>

          <View style={{ paddingHorizontal: 40 }}>
            <Text
              style={{
                fontSize: 14,
                color: "#344863",
                textAlign: "center",
                fontWeight: "600",
                marginBottom: 4,
              }}
            >
              Informasi Arah
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#344863a6",
                textAlign: "center",
                lineHeight: 18,
              }}
            >
              Gunakan kompas fisik atau sensor perangkat Anda secara terpisah
              untuk akurasi yang lebih tepat.
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
