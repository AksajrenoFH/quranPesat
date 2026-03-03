import { useRouter } from "expo-router";
import { ChevronLeft, RefreshCcw, Search } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ItemAsmaulHusna = {
  urutan: number;
  arab: string;
  latin: string;
  arti: string;
};

export default function asmaulHusna() {
  const router = useRouter();

  const [data, setData] = useState<ItemAsmaulHusna[]>([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    fetch("https://asmaul-husna-api.vercel.app/api/all")
      .then((response) => response.json())
      .then((result) => {
        if (result && result.data) {
          setData(result.data);
        }
        setIsLoad(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCF6EA" }}>
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <ChevronLeft
              onPress={() => router.replace("/(tabs)")}
              size={32}
              color={"#344863a6"}
            />

            <Text style={{ fontSize: 26, color: "#344863", fontWeight: "800" }}>
              Asmaul Husna
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <RefreshCcw size={20} color={"#344863a6"} />
          </View>
        </View>

        {/* searhc */}

        <View
          style={{
            marginTop: 20,
            marginBottom: 10,
            paddingHorizontal: 20,
            backgroundColor: "#FCF6EA",
            paddingBottom: 10,
          }}
        >
          <View style={{ justifyContent: "center" }}>
            <TextInput
              placeholder="Cari arab, latin, arti..."
              style={{
                backgroundColor: "#fff",
                borderRadius: 15,
                padding: 14,
                paddingRight: 45,
                fontSize: 14,
                borderWidth: 1,
                borderColor: "#E5E7EB",
                shadowColor: "#000",
                shadowOpacity: 0.05,
                shadowRadius: 5,
                elevation: 2,
              }}
              placeholderTextColor="#7F7E7D"
            />

            <Search
              size={22}
              color="#7F7E7D"
              style={{ position: "absolute", right: 15 }}
            />
          </View>
        </View>

        {/* Asmauol Husna */}

        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 20,
            flexDirection: "row-reverse", // Sesuai gambar: urutan 1 dari kanan
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center", // Agar grid terlihat seimbang
          }}
        >
          {isLoad ? (
            <ActivityIndicator
              size={30}
              color={"#344863"}
              style={{ flex: 1, marginTop: 50 }}
            />
          ) : (
            data &&
            data.map((item, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#E5E7EB",
                  borderRadius: 12, // Sudut sedikit lebih tumpul
                  padding: 10,
                  width: "31%", // Ukuran pas untuk 3 kolom
                  aspectRatio: 1, // Memaksa kartu menjadi kotak sempurna
                  justifyContent: "space-between", // Mendorong konten ke atas dan bawah
                }}
              >
                {/* BAGIAN ATAS: Nomor & Arab */}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: "bold",
                      color: "#7F7E7D",
                    }}
                  >
                    {item.urutan}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#344863",
                      textAlign: "right",
                      flexShrink: 1,
                    }}
                    numberOfLines={1}
                  >
                    {item.arab}
                  </Text>
                </View>

                {/* BAGIAN BAWAH: Latin & Arti */}
                <View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: "bold",
                      color: "#344863",
                    }}
                    numberOfLines={1}
                  >
                    {item.latin}
                  </Text>
                  <Text
                    style={{ fontSize: 9, color: "#7F7E7D", marginTop: 2 }}
                    numberOfLines={2} // Menghindari teks meluber jika arti terlalu panjang
                  >
                    {item.arti}
                  </Text>
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
