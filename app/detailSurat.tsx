import { useLocalSearchParams, useRouter } from "expo-router";
import { ChevronLeft, Square, Volume2 } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ayat = {
  ayat: {
    nomor: number;
    ar: string;
    tr: string;
    idn: string;
  };
};

type detailSurat = {
  nama: string;
  nama_latin: string;
  jumlah_ayat: number;
  tempat_turun: string;
  arti: string;
  deskripsi: string;
  audio: string;
  ayat: ayat[];
};

export default function detailSurat() {
  const router = useRouter();

  const [isPlay, setIsPlay] = useState(false);

  const [dataDetail, setDataDetail] = useState<detailSurat | null>(null);
  const [isLoad, setIsLoad] = useState(true);

  const param = useLocalSearchParams();
  const infoSurat = JSON.parse(param.nomor as string);

  useEffect(() => {
    fetch(`https://quran-api.santrikoding.com/api/surah/${infoSurat.nomor}`)
      .then((response) => response.json())
      .then((result) => {
        setDataDetail(result);
        setIsLoad(false);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCF6EA" }}>
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
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <ChevronLeft
              size={32}
              color={"#344863a6"}
              onPress={() => router.back()}
            />
            <View>
              <Text
                style={{ fontSize: 16, color: "#344863", fontWeight: "800" }}
              >
                Al-Fatihah
              </Text>
              <Text style={{ fontSize: 12, color: "#344863a6" }}>
                Pembukaan • 7 ayat • Mekah
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 16, color: "#344863a6", fontWeight: "800" }}>
            Arabnya
          </Text>
        </View>
        {/* Audio */}
        <Pressable
          onPress={() => setIsPlay(!isPlay)}
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
      </View>
    </SafeAreaView>
  );
}
