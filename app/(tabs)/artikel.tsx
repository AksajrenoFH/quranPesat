import { BookOpen, ExternalLink } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Interface untuk menghindari penggunaan [ANY]
interface NewsItem {
  title: string;
  pubDate: string;
  link: string;
  author: string;
  thumbnail: string;
  description: string;
  enclosure: {
    link: string;
  };
}

export default function Artikel() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [activeCat, setActiveCat] = useState("Semua");

  const fetchNews = async () => {
    try {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://republika.co.id/rss/khazanah",
      );
      const data = await response.json();
      if (data.status === "ok") {
        setNews(data.items);
      }
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchNews();
  };

  const renderItem = ({ item }: { item: NewsItem }) => (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 16,
        marginBottom: 20,
        overflow: "hidden",
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
      }}
    >
      <Image
        source={{ uri: item.enclosure?.link || item.thumbnail }}
        style={{ width: "100%", height: 200, backgroundColor: "#E5E7EB" }}
        resizeMode="cover"
      />

      <View style={{ padding: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          <View
            style={{
              backgroundColor: "#F3F4F6",
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 6,
            }}
          >
            <Text style={{ fontSize: 12, color: "#6B7280" }}>Islami</Text>
          </View>
          <Text style={{ fontSize: 12, color: "#9CA3AF" }}>
            {new Date(item.pubDate).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 16,
            fontWeight: "800",
            color: "#1F2937",
            lineHeight: 22,
          }}
          numberOfLines={2}
        >
          {item.title}
        </Text>

        <Text
          style={{
            fontSize: 13,
            color: "#6B7280",
            marginTop: 8,
            lineHeight: 18,
          }}
          numberOfLines={3}
        >
          {item.description.replace(/<[^>]*>?/gm, "").substring(0, 150)}...
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 15,
            paddingTop: 12,
            borderTopWidth: 1,
            borderTopColor: "#F3F4F6",
          }}
        >
          <Text style={{ fontSize: 12, color: "#9CA3AF", fontWeight: "600" }}>
            {item.author || "Redaksi"}
          </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL(item.link)}
            style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
          >
            <Text style={{ fontSize: 13, color: "#344863", fontWeight: "700" }}>
              Baca Selengkapnya
            </Text>
            <ExternalLink size={14} color="#344863" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCF6EA" }}>
      {/* HEADER SESUAI GAMBAR */}
      <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <BookOpen size={28} color="#344863" />
          <Text style={{ fontSize: 24, fontWeight: "800", color: "#344863" }}>
            Artikel
          </Text>
        </View>
        <Text style={{ fontSize: 14, color: "#7F7E7D", marginTop: 4 }}>
          Berita dan artikel Islami terkini
        </Text>
      </View>

      {/* FILTER CATEGORY SCROLL */}
      <View style={{ marginBottom: 15 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
        >
          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: "#344863",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Semua
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: "transparent",
            }}
          >
            <Text
              style={{
                color: "#9CA3AF",
                fontWeight: "600",
              }}
            >
              Islam
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: "transparent",
            }}
          >
            <Text
              style={{
                color: "#9CA3AF",
                fontWeight: "600",
              }}
            >
              Ramadhan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: "transparent",
            }}
          >
            <Text
              style={{
                color: "#9CA3AF",
                fontWeight: "600",
              }}
            >
              Ibadah
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: "transparent",
            }}
          >
            <Text
              style={{
                color: "#9CA3AF",
                fontWeight: "600",
              }}
            >
              Kisah Nabi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: "transparent",
            }}
          >
            <Text
              style={{
                color: "#9CA3AF",
                fontWeight: "600",
              }}
            >
              Tafsir
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView style={{ paddingBottom: 100 }}>
        {loading ? (
          <ActivityIndicator
            size={30}
            color={"#344863"}
            style={{ marginTop: 50 }}
          />
        ) : (
          news.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: 15,
                marginHorizontal: 20,
                marginBottom: 20,
                overflow: "hidden",
              }}
            >
              <TouchableOpacity
                onPress={() => Linking.openURL(item.link)}
                activeOpacity={0.8}
              >
                <Image
                  source={{ uri: item.enclosure?.link || item.thumbnail }}
                  style={{
                    width: "100%",
                    height: 180,
                    backgroundColor: "#E5E7EB",
                  }}
                />

                <View style={{ padding: 15 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#F3F4F6",
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 5,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          color: "#9CA3AF",
                          fontWeight: "600",
                        }}
                      >
                        Islami
                      </Text>
                    </View>
                    <Text style={{ fontSize: 11, color: "#9CA3AF" }}>
                      {new Date(item.pubDate).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </Text>
                  </View>

                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 16,
                      color: "#344863",
                      fontWeight: "700",
                      lineHeight: 22,
                    }}
                  >
                    {item.title}
                  </Text>

                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 13,
                      color: "#778597",
                      marginTop: 8,
                      lineHeight: 18,
                    }}
                  >
                    {item.description.replace(/<[^>]*>?/gm, "")}
                  </Text>

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 15,
                      paddingTop: 10,
                      borderTopWidth: 1,
                      borderTopColor: "#F3F4F6",
                    }}
                  >
                    <Text style={{ fontSize: 12, color: "#9CA3AF" }}>
                      {item.author || "Redaksi"}
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#344863",
                          fontWeight: "700",
                        }}
                      >
                        Baca Selengkapnya
                      </Text>
                      <ExternalLink
                        size={14}
                        color="#344863"
                        style={{ marginLeft: 4 }}
                      />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
