import { Audio } from "expo-av";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Bookmark,
  ChevronLeft,
  Play,
  Square,
  Volume2,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ayatItem = {
  nomor: number;
  ar: string;
  tr: string;
  idn: string;
};

type detailSurat = {
  nama: string;
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
  deskripsi: string;
  audio: string;
  ayat: ayatItem[];
};

export default function detailSurat() {
  const router = useRouter();

  const [dataDetail, setDataDetail] = useState<detailSurat | null>(null);
  const [showDesc, setShowDesc] = useState(false);

  const [isLoad, setIsLoad] = useState(true);
  const [dots, setDots] = useState("");

  const param = useLocalSearchParams();
  const infoSurat = JSON.parse(param.nomor as string);

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlay, setIsPlay] = useState(false);

  const [savedAyat, setSavedAyat] = useState<number[]>([]);
  const toggleSavedAyat = (nomorAyat: number) => {
    setSavedAyat((prev) => {
      if (prev.includes(nomorAyat)) {
        return prev.filter((id) => id !== nomorAyat);
      } else {
        return [...prev, nomorAyat];
      }
    });
  };

  async function toggleAudio() {
    if (sound) {
      if (isPlay) {
        await sound.pauseAsync();
        setIsPlay(false);
      } else {
        await sound.playAsync();
        setIsPlay(true);
      }
      return;
    }

    if (dataDetail?.audio) {
      const { sound: Muratal } = await Audio.Sound.createAsync(
        { uri: dataDetail.audio },
        { shouldPlay: true },
      );
      setSound(Muratal);
      setIsPlay(true);

      Muratal.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          setIsPlay(false);
        }
      });
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    fetch(`https://quran-api.santrikoding.com/api/surah/${infoSurat.nomor}`)
      .then((response) => response.json())
      .then((result) => {
        setDataDetail(result);
        setIsLoad(false);
      });
  }, []);

  useEffect(() => {
    const inter = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) {
          return "";
        } else {
          return prevDots + ".";
        }
      });
    }, 500);

    return () => clearInterval(inter);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCF6EA" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showDesc}
        onRequestClose={() => setShowDesc(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#FCF6EA",
              borderRadius: 20,
              padding: 25,
              width: "100%",
              maxHeight: "70%",
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "800",
                color: "#344863",
              }}
            >
              Tentang {dataDetail?.nama_latin}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#344863a6",
                textTransform: "capitalize",
                marginBottom: 15,
              }}
            >
              {dataDetail?.arti} • {dataDetail?.jumlah_ayat} ayat •{" "}
              {dataDetail?.tempat_turun}
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
              <Text
                style={{
                  fontSize: 15,
                  color: "#344863",
                  lineHeight: 24,
                  textAlign: "justify",
                }}
              >
                {/* Bersihkan tag HTML dari deskripsi */}
                {dataDetail?.deskripsi.replace(/<[^>]*>?/gm, "")}
              </Text>
            </ScrollView>

            <Pressable
              onPress={() => setShowDesc(false)}
              style={{
                marginTop: 20,
                backgroundColor: "#344863",
                padding: 12,
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: "700" }}>Tutup</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {isLoad ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#344863" />
          <Text style={{ marginTop: 10, color: "#344863" }}>
            Memuat Ayat{dots}
          </Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              padding: 20,
              borderBottomWidth: 1,
              borderColor: "#446da7c9",
              marginBottom: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <ChevronLeft
                size={32}
                color={"#344863a6"}
                onPress={() => router.replace("/(tabs)/quran")}
              />
              <Pressable onPress={() => setShowDesc(true)}>
                <View>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#344863",
                      fontWeight: "800",
                    }}
                  >
                    {dataDetail?.nama_latin}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#344863a6",
                      textTransform: "capitalize",
                    }}
                  >
                    {dataDetail?.arti} • {dataDetail?.jumlah_ayat} ayat •{" "}
                    {dataDetail?.tempat_turun}
                  </Text>
                </View>
              </Pressable>
            </View>
            <Text
              style={{ fontSize: 16, color: "#344863a6", fontWeight: "800" }}
            >
              {dataDetail?.nama}
            </Text>
          </View>
          {/* Audio */}
          <Pressable
            onPress={toggleAudio}
            style={{
              backgroundColor: "#446da7c9",
              paddingHorizontal: 20,
              paddingVertical: 10,
              alignItems: "center",
              marginHorizontal: 20,
              borderRadius: 16,
              flexDirection: "row",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {isPlay ? (
              <Square size={20} color={"#FCF6EA"} />
            ) : (
              <Volume2 size={20} color={"#FCF6EA"} />
            )}
            <Text
              style={{
                fontSize: 16,
                color: "#FCF6EA",
                fontWeight: "700",
              }}
            >
              Putar Full Surah
            </Text>
          </Pressable>
          {/* Ayat */}
          <ScrollView
            style={{ marginTop: 20 }}
            showsVerticalScrollIndicator={false}
          >
            {dataDetail?.ayat.map((item, index) => {
              const isSelected = savedAyat.includes(item.nomor);

              return (
                <View
                  key={index}
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                    borderBottomWidth: 1,
                    borderBottomColor: "rgba(0,0,0,0.05)",
                  }}
                >
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
                        backgroundColor: "#7A8E87",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        {item.nomor}
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row", gap: 15 }}>
                      <Play size={20} color="#7A8E87" />
                      <Bookmark
                        onPress={() => toggleSavedAyat(item.nomor)}
                        size={20}
                        color={
                          savedAyat.includes(item.nomor) ? "#BCC6BE" : "#7A8E87"
                        }
                        fill={
                          savedAyat.includes(item.nomor)
                            ? "#bdbdbd"
                            : "transparent"
                        }
                      />
                    </View>
                  </View>

                  <Text
                    style={{
                      fontSize: 28,
                      color: "#344863",
                      textAlign: "right",
                      lineHeight: 52,
                      fontWeight: "500",
                      marginBottom: 15,
                    }}
                  >
                    {item.ar}
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      color: "#7A8E87",
                      fontStyle: "italic",
                      lineHeight: 22,
                      marginBottom: 8,
                    }}
                  >
                    {item.tr.replace(/<[^>]*>?/gm, "")}
                  </Text>

                  <Text
                    style={{ fontSize: 14, color: "#344863", lineHeight: 22 }}
                  >
                    {item.idn}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
}
