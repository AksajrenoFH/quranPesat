import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Bookmark, BookOpen, Search, Settings } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Surah = {
  nomor: number;
  nama: string;
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
};

export default function Quran() {
  const router = useRouter();

  const [data, setData] = useState<Surah[]>([]);
  const [isLoad, setIsLoad] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://quran-api.santrikoding.com/api/surah")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
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
            <BookOpen size={32} color={"#344863a6"} />
            <Text style={{ fontSize: 26, color: "#344863", fontWeight: "800" }}>
              Al-Quran
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <Bookmark size={28} color={"#344863a6"} />
            <Settings size={28} color={"#344863a6"} />
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
              placeholder="Cari surat..."
              value={search}
              onChangeText={(text) => setSearch(text)}
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

        {/* SUrah */}
        <View style={{ paddingBottom: 100 }}>
          {isLoad ? (
            <ActivityIndicator
              size={30}
              color={"#344863"}
              style={{ flex: 1 }}
            />
          ) : (
            data.map((surah) => (
              <TouchableOpacity
                key={surah.nomor}
                onPress={() =>
                  router.push({
                    pathname: "/detailSurat",
                    params: { nomor: JSON.stringify(surah) },
                  })
                }
                activeOpacity={0.7}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 15,
                  paddingHorizontal: 20,
                  borderBottomWidth: 1,
                  borderBottomColor: "rgba(150, 150, 150, 0.1)",
                }}
              >
                <View
                  style={{
                    width: 55,
                    height: 55,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("./../../assets/logo/ayat.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                    }}
                    contentFit="contain"
                  />
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#344863",
                      fontWeight: "700",
                    }}
                  >
                    {surah.nomor}
                  </Text>
                </View>

                <View style={{ flex: 1, marginLeft: 15 }}>
                  <Text
                    style={{
                      fontSize: 17,
                      color: "#344863",
                      fontWeight: "700",
                    }}
                  >
                    {surah.nama_latin}
                  </Text>
                  <Text
                    style={{ fontSize: 13, color: "#778597", marginTop: 2 }}
                  >
                    {surah.arti} • {surah.jumlah_ayat} Ayat
                  </Text>
                </View>

                <View style={{ alignItems: "flex-end" }}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#556761",
                      fontWeight: "bold",
                    }}
                  >
                    {surah.nama}
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#9CA3AF",
                      marginTop: 4,
                      textTransform: "capitalize",
                    }}
                  >
                    {surah.tempat_turun}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
