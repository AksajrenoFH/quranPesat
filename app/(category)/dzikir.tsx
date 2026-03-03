import { useRouter } from "expo-router";
import { Bookmark, ChevronLeft } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ItemDzikir = {
  type: string;
  arab: string;
  indo: string;
  ulang: string;
};

export default function DzikirScreen() {
  const router = useRouter();

  const [data, setData] = useState<ItemDzikir[]>([]);
  const [filteredData, setFilteredData] = useState<ItemDzikir[]>([]);
  const [isLoad, setIsLoad] = useState(true);
  // filter pagi sore (kafe wkwk)
  const [activeTab, setActiveTab] = useState("Semua");

  useEffect(() => {
    fetchDzikir();
  }, []);

  const fetchDzikir = () => {
    setIsLoad(true);
    fetch("https://muslim-api-three.vercel.app/v1/dzikir")
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
        setFilteredData(result.data);
        setIsLoad(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoad(false);
      });
  };

  // pagi sore
  const handleFilter = (type: string) => {
    setActiveTab(type);
    if (type === "Semua") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) => item.type.toLowerCase() === type.toLowerCase(),
      );
      setFilteredData(filtered);
    }
  };

  const handleDevelopAlert = () => {
    Alert.alert("Info", "Dzikir Dhuha masih dalam pengembangan ya! 🙏");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCF6EA" }}>
      {/* hider */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ marginRight: 15 }}
        >
          <ChevronLeft size={28} color={"#344863"} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 22,
            color: "#344863",
            fontWeight: "800",
            flex: 1,
            textAlign: "center",
            marginRight: 43,
          }}
        >
          Dzikir
        </Text>
        <TouchableOpacity>
          <Bookmark size={24} color={"#344863"} />
        </TouchableOpacity>
      </View>

      {/* button */}
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          marginBottom: 15,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            paddingVertical: 12,
            backgroundColor: "#E5E7D6",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            alignItems: "center",
            borderBottomWidth: 3,
            borderColor: "#849597",
          }}
        >
          <Text style={{ fontWeight: "700", color: "#344863" }}>
            Dzikir Harian
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDevelopAlert}
          style={{
            flex: 1,
            paddingVertical: 12,
            backgroundColor: "#fff",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "700", color: "#9CA3AF" }}>
            Dzikir Duha
          </Text>
          <View
            style={{
              backgroundColor: "#FDE68A",
              paddingHorizontal: 6,
              borderRadius: 4,
              marginTop: 2,
            }}
          >
            <Text style={{ fontSize: 8, color: "#92400E", fontWeight: "800" }}>
              DEVELOP
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* button juga, tpi buat filtering */}
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          gap: 8,
          marginBottom: 15,
        }}
      >
        {["Semua", "Pagi", "Sore", "Solat"].map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => handleFilter(cat)}
            style={{
              flex: 1,
              paddingVertical: 8,
              borderRadius: 8,
              backgroundColor: activeTab === cat ? "#42605E" : "#fff",
              borderWidth: 1,
              borderColor: activeTab === cat ? "#42605E" : "#E5E7EB",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: activeTab === cat ? "#fff" : "#6B7280",
                fontWeight: "600",
                fontSize: 13,
              }}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* dzikir */}
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
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
                borderRadius: 15,
                marginHorizontal: 20,
                marginBottom: 15,
                padding: 16,
                borderWidth: 1,
                borderColor: "#F3F4F6",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 12,
                }}
              >
                <View style={{ flexDirection: "row", gap: 6 }}>
                  <View
                    style={{
                      backgroundColor: "#F3F4F6",
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                      borderRadius: 6,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#6B7280",
                        fontWeight: "700",
                      }}
                    >
                      Dzikir #{index + 1}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#E0F2F1",
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                      borderRadius: 6,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        color: "#00695C",
                        fontWeight: "700",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.type}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#FFF7ED",
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: "#FFEDD5",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#C2410C",
                      fontWeight: "800",
                    }}
                  >
                    {item.ulang}
                  </Text>
                </View>
              </View>

              <Text
                style={{
                  color: "#344863",
                  fontSize: 22,
                  textAlign: "right",
                  marginBottom: 15,
                  lineHeight: 45,
                  fontWeight: "500",
                }}
              >
                {item.arab}
              </Text>

              <Text
                style={{
                  color: "#6B7280",
                  fontSize: 14,
                  lineHeight: 22,
                  textAlign: "left",
                  fontStyle: "italic",
                }}
              >
                "{item.indo}"
              </Text>

              <TouchableOpacity
                style={{
                  marginTop: 15,
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  paddingVertical: 6,
                  paddingHorizontal: 12,
                  borderRadius: 8,
                  backgroundColor: "#F9FAFB",
                  borderWidth: 1,
                  borderColor: "#E5E7EB",
                }}
              >
                <Bookmark size={14} color="#6B7280" />
                <Text
                  style={{ fontSize: 12, color: "#6B7280", fontWeight: "600" }}
                >
                  Simpan
                </Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
