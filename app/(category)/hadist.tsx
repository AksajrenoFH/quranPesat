import { useRouter } from "expo-router";
import { Bookmark, ChevronLeft, Search } from "lucide-react-native";
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

type HadistItem = {
  no: number;
  judul: string;
  arab: string;
  indo: string;
};

export default function HadistScreen() {
  const router = useRouter();
  const [data, setData] = useState<HadistItem[]>([]);
  const [filteredData, setFilteredData] = useState<HadistItem[]>([]);
  const [isLoad, setIsLoad] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://muslim-api-three.vercel.app/v1/hadits")
      .then((response) => response.json())
      .then((result) => {
        if (result && result.data) {
          setData(result.data);
          setFilteredData(result.data);
        }
        setIsLoad(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoad(false);
      });
  }, []);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filtered = data.filter((item) =>
      item.judul.toLowerCase().includes(text.toLowerCase()),
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
            Hadist
          </Text>
        </TouchableOpacity>
        <Bookmark size={24} color={"#344863"} />
      </View>

      {/* SEARCH BAR */}
      <View style={{ paddingHorizontal: 20, marginBottom: 15 }}>
        <View style={{ position: "relative", justifyContent: "center" }}>
          <TextInput
            placeholder="Cari tema hadist..."
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        {isLoad ? (
          <View style={{ marginTop: 100, alignItems: "center" }}>
            <ActivityIndicator size="large" color={"#42605E"} />
          </View>
        ) : (
          filteredData.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: 25,
                marginHorizontal: 20,
                marginBottom: 20,
                padding: 20,
                borderWidth: 1,
                borderColor: "#F3F4F6",
              }}
            >
              {/* Card Header */}
              <View
                style={{
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#42605E15",
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#42605E",
                      fontWeight: "700",
                      fontSize: 12,
                    }}
                  >
                    #{item.no}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#344863",
                    fontWeight: "800",
                    fontSize: 16,
                    textAlign: "left",
                    flex: 1,
                    marginLeft: 15,
                  }}
                >
                  {item.judul}
                </Text>
              </View>

              {/* Teks Arab */}
              <Text
                style={{
                  color: "#344863",
                  fontWeight: "bold",
                  fontSize: 22,
                  textAlign: "right",
                  lineHeight: 45,
                  marginBottom: 15,
                }}
              >
                {item.arab}
              </Text>

              {/* Teks Terjemahan */}
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: "#F3F4F6",
                  paddingTop: 15,
                  marginBottom: 15,
                }}
              >
                <Text
                  style={{
                    color: "#6B7280",
                    fontSize: 14,
                    lineHeight: 22,
                    fontStyle: "italic",
                  }}
                >
                  "{item.indo}"
                </Text>
              </View>

              {/* Action Button */}
              <TouchableOpacity
                style={{
                  backgroundColor: "#42605E",
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 12,
                  flexDirection: "row",
                  gap: 8,
                  alignItems: "center",
                  alignSelf: "flex-end",
                }}
              >
                <Bookmark size={18} color={"#fff"} />
                <Text
                  style={{ color: "#fff", fontSize: 12, fontWeight: "600" }}
                >
                  Simpan Hadist
                </Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
