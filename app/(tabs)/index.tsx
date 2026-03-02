import {
  Bell,
  BookOpen,
  BookOpenText,
  CloudSun,
  Coins,
  Compass,
  Heart,
  LayoutGrid,
  MessageCircle,
  Moon,
  Scroll,
  Search,
  Sun,
  Sunrise,
  Sunset,
} from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

type Adzan = {
  Subuh: string;
  Dzuhur: string;
  Ashar: string;
  Maghrib: string;
  Isya: string;
};

export default function index() {
  const [time, setTime] = useState<string>("");
  // Countown
  const [nextPrayer, setNextPrayer] = useState<string>("");
  const [countdown, setCountdown] = useState<string>("");

  function nextPrayerTime() {
    const now = new Date();
    const today = now.toDateString();

    const prayers = Object.entries(adzan).map(([name, time]) => {
      const [hour, minute] = time.split(":").map(Number);

      return {
        name,
        date: new Date(`${today} ${hour}:${minute}:00`),
      };
    });

    const upcoming = prayers?.find((p) => p.date > now);

    return upcoming || prayers[0];
  }

  useEffect(() => {
    const inter = setInterval(() => {
      const now = new Date();
      const foramatTime = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(foramatTime);

      const next = nextPrayerTime();
      setNextPrayer(next.name);

      const diff = next.date.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown(
        `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
      );
    }, 1000);

    return () => clearInterval(inter);
  }, []);

  // adzan
  const adzan: Adzan = {
    Subuh: "04:43",
    Dzuhur: "12:09",
    Ashar: "15:12",
    Maghrib: "18:15",
    Isya: "19:24",
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingBottom: 100 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Ya itulah */}
      <ImageBackground
        source={require("./../../assets/images/element.png")}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 350,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.2)", gap: 16 }}>
          {/* Header */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 20,
              marginTop: 20,
            }}
          >
            {/* Heading */}
            <View style={{ flexDirection: "column", gap: 4 }}>
              <Text
                style={{ fontSize: 18, fontWeight: "700", color: "#f1f1f1" }}
              >
                12 Ramadhan 1447 H
              </Text>
              <Text style={{ fontSize: 14, color: "#cecece" }}>
                Bogor, Indonesia
              </Text>
            </View>
            {/* Notification */}
            <Bell
              size={22}
              color="#FFF"
              fill={"#E5EBEB"}
              style={{ marginTop: 10 }}
            />
          </View>
          {/* Jam */}
          <View
            style={{
              flexDirection: "column",
              gap: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 46, fontWeight: "700", color: "#f1f1f1" }}>
              {time}
            </Text>
            <Text style={{ fontSize: 14, color: "#cecece" }}>
              {nextPrayer} dalam {countdown}
            </Text>
          </View>
          {/* Adzan */}
          {/* Container */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 30,
              marginTop: 20,
            }}
          >
            {/* Waktu sholat */}
            <View style={{ gap: 6, alignItems: "center" }}>
              <Text style={{ fontSize: 14, color: "#f1f1f1" }}>Subuh</Text>
              <Sunrise size={22} color="#E5EBEB" />
              <Text style={{ fontSize: 14, color: "#f1f1f1" }}>04:43</Text>
            </View>
            <View style={{ gap: 6, alignItems: "center" }}>
              <Text style={{ fontSize: 14, color: "#f1f1f1" }}>Dzuhur</Text>
              <CloudSun size={22} color="#E5EBEB" />
              <Text style={{ fontSize: 14, color: "#f1f1f1" }}>12:09</Text>
            </View>
            <View style={{ gap: 6, alignItems: "center" }}>
              <Text style={{ fontSize: 14, color: "#f1f1f1" }}>Ashar</Text>
              <Sun size={22} color="#E5EBEB" />
              <Text style={{ fontSize: 14, color: "#f1f1f1" }}>15:12</Text>
            </View>
            <View style={{ gap: 6, alignItems: "center" }}>
              <Text style={{ fontSize: 14, color: "#f1f1f1" }}>Maghrib</Text>
              <Sunset size={22} color="#E5EBEB" />
              <Text style={{ fontSize: 14, color: "#f1f1f1" }}>18:15</Text>
            </View>
            <View style={{ gap: 6, alignItems: "center" }}>
              <Text style={{ fontSize: 14, color: "#f1f1f1" }}>Isya</Text>
              <Moon size={22} color="#E5EBEB" />
              <Text style={{ fontSize: 14, color: "#f1f1f1" }}>19:24</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      {/* Search */}
      <View style={{ marginTop: 20, marginBottom: 30 }}>
        <TextInput
          placeholder="Cari surat, doa, artikel, hadist..."
          style={{
            marginHorizontal: 15,
            backgroundColor: "#e4e4e4",
            borderRadius: 10,
            padding: 12,
            fontSize: 14,
            borderWidth: 1,
            borderColor: "#969696",
          }}
          placeholderTextColor="#7F7E7D"
        />
        <Search
          size={22}
          color="#7F7E7D"
          style={{ position: "absolute", top: 12, right: 26 }}
        />
      </View>

      {/* BUtton */}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          paddingVertical: 20,
        }}
      >
        <View style={{ width: "25%", alignItems: "center", marginBottom: 20 }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <BookOpen size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Al-Quran
          </Text>
        </View>

        <View style={{ width: "25%", alignItems: "center", marginBottom: 20 }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <MessageCircle size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Doa Harian
          </Text>
        </View>

        <View style={{ width: "25%", alignItems: "center", marginBottom: 20 }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <Heart size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Dzikir Dhuha
          </Text>
        </View>

        <View style={{ width: "25%", alignItems: "center", marginBottom: 20 }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <Scroll size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Hadist
          </Text>
        </View>

        <View style={{ width: "25%", alignItems: "center", marginBottom: 20 }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <Compass size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Arah Kiblat
          </Text>
        </View>

        <View style={{ width: "25%", alignItems: "center", marginBottom: 20 }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <Coins size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Donasi
          </Text>
        </View>

        <View style={{ width: "25%", alignItems: "center", marginBottom: 20 }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <BookOpenText size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Asmaul Husna
          </Text>
        </View>

        <View style={{ width: "25%", alignItems: "center", marginBottom: 20 }}>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#EAE7DE",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 8,
            }}
          >
            <LayoutGrid size={28} color="#778B8A" fill={"#BCC6BE"} />
          </View>
          <Text style={{ fontSize: 12, textAlign: "center", color: "#444" }}>
            Lainnya
          </Text>
        </View>
      </View>

      {/* Banner */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
          backgroundColor: "#a4b4b1",
          padding: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#758C8DD",
          marginBottom: 30,
          marginHorizontal: 15,
        }}
      >
        <Moon size={32} color="#7f8585" fill={"#f8e326"} />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#444" }}>
            Ramadhan Mubarak!
          </Text>
          <Text style={{ fontSize: 14, color: "#7F7E7D" }}>
            Selamat menjalankan ibadah puasa
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
