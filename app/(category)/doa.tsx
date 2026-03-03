import { useRouter } from "expo-router";
import { ChevronLeft, RefreshCcw, Search, Star } from "lucide-react-native";
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

type ItemDoa = {
  id: string;
  doa: string; // judul di API ini namanya 'doa'
  ayat: string; // teks arab di API ini namanya 'ayat'
  artinya: string; // terjemah di API ini namanya 'artinya'
};

export default function doa() {
  const router = useRouter();

  const [data, setData] = useState<ItemDoa[]>([]);
  const [filteredData, setFilteredData] = useState<ItemDoa[]>([]);
  const [search, setSearch] = useState("");
  const [isLoad, setIsLoad] = useState(true);

  // Ambil data dari API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoad(true);
    fetch("https://doa-doa-api-ahmadramadhan.fly.dev/api")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setFilteredData(result);
        setIsLoad(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoad(false);
      });
  };

  // Fungsi Search
  const handleSearch = (text: string) => {
    setSearch(text);
    const filtered = data.filter(
      (item) =>
        item.doa.toLowerCase().includes(text.toLowerCase()) ||
        item.artinya.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCF6EA" }}>
      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => router.replace("/(tabs)")}
          style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
        >
          <ChevronLeft size={28} color={"#344863"} />
          <Text style={{ fontSize: 22, color: "#344863", fontWeight: "800" }}>
            Doa Harian
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fetchData}>
          <RefreshCcw size={24} color={"#344863"} />
        </TouchableOpacity>
      </View>

      <ScrollView stickyHeaderIndices={[1]}>
        {/* SEARCH BAR */}
        <View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
          <View style={{ position: "relative", justifyContent: "center" }}>
            <TextInput
              placeholder="Cari judul, arti, latin..."
              value={search}
              onChangeText={handleSearch}
              style={{
                backgroundColor: "#fff",
                borderRadius: 20,
                paddingVertical: 12,
                paddingHorizontal: 20,
                paddingRight: 50,
                fontSize: 15,
                borderWidth: 1,
                borderColor: "#E5E7EB",
                color: "#344863",
              }}
              placeholderTextColor="#9CA3AF"
            />
            <Search
              size={20}
              color="#9CA3AF"
              style={{ position: "absolute", right: 20 }}
            />
          </View>
        </View>

        {/* TAB BUTTONS */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            gap: 12,
            marginBottom: 20,
            backgroundColor: "#FCF6EA",
            paddingBottom: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#849597",
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Semua</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#849597",
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 20,
            }}
          >
            <Text style={{ color: "#849597", fontWeight: "600" }}>
              Favorit (0)
            </Text>
          </TouchableOpacity>
        </View>

        {/* LOADING STATE */}
        {isLoad ? (
          <ActivityIndicator
            size="large"
            color="#849597"
            style={{ marginTop: 50 }}
          />
        ) : (
          filteredData.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: 25,
                marginHorizontal: 20,
                marginBottom: 15,
                padding: 20,
                borderWidth: 1,
                borderColor: "#F3F4F6",
              }}
            >
              {/* Card Top: Judul & Star */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 12,
                }}
              >
                <Text
                  style={{
                    color: "#344863",
                    fontWeight: "800",
                    fontSize: 18,
                    flex: 1,
                  }}
                >
                  {item.doa}
                </Text>
                <TouchableOpacity>
                  <Star size={22} color={"#849597"} strokeWidth={2} />
                </TouchableOpacity>
              </View>

              {/* Card Middle: Arab */}
              <Text
                style={{
                  color: "#344863",
                  fontSize: 22,
                  textAlign: "right",
                  marginBottom: 15,
                  lineHeight: 40,
                  fontFamily: "System", // Ganti ke font Arab lo kalau ada
                }}
              >
                {item.ayat}
              </Text>

              {/* Card Bottom: Arti & No */}
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: "#F3F4F6",
                  paddingTop: 15,
                  flexDirection: "row",
                  alignItems: "flex-end",
                  gap: 10,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ color: "#6B7280", fontSize: 14, lineHeight: 20 }}
                  >
                    {item.artinya}
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: "#42605E15",
                    paddingHorizontal: 10,
                    paddingVertical: 4,
                    borderRadius: 8,
                    minWidth: 35,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#42605E",
                      fontWeight: "700",
                      fontSize: 12,
                    }}
                  >
                    #{index + 1}
                  </Text>
                </View>
              </View>
            </View>
          ))
        )}
        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}
