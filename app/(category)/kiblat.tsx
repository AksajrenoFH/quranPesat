import { Image, ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import { ChevronLeft, EllipsisVertical, MapPin } from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";

const KIBLAT = {
  latitude: 21.422487,
  longitude: 39.826206,
}

function toRadians(deg){
  return (deg * Math.PI) / 180
}

function toDegrees(rad){
  return (rad * 180) / Math.PI
}

function getBearing(lat1, lon1, lat2, lon2){
  const dlon = toRadians(lon2 - lon1)

  const y = Math.sin(dlon) * Math.cos(toRadians(lat2))
  const x = Math.cos(toRadians(lat1)) * Math.sin(toRadians(lat2)) - Math.sin(lat1) * Math.cos(toRadians(lat2)) * Math.cos(dlon)

  let brng = toDegrees(Math.atan2(y,x))
  return (brng + 360) % 360
}

export default function kiblat() {
  const router = useRouter();
  
  const rotateCompass = useRef(new Animated.Value(0)).current

  const [heading, setHeading] = useState(0);
  const [kiblat, setKiblat] = useState(0);
  const [locationName, setLocationName] = useState("Mencari Lokasi")

  useEffect(() => {
    (async() => {
      const {status} = await Location.requestForegroundPermissionAsync();
      if(status !== "granted") return;

      const location = wait Location.getCurrentPositionAsync();
      const bearing = getBearing(
        toRadians(location.coords.latitude),
        location.coords.longitude,
        KIBLAT.latitude
        KIBLAT.longitude
      );

      setKiblat(bearing)

      const geo = await Location.reverseGeocodeAsync(
        location.coords
      )

      if(geo.length > 0){
        setLocationName(
          `${geo[0].city || geo[0].region}, ${
            geo[0].country
          }`
        );
      }
    })()
  }, [])
  
  return (
    <ImageBackground
      source={require("./../../assets/images/kabah.png")}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <View
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          flex: 1,
          width: "100%",
          height: "100%",
          zIndex: 2,
        }}
      >
        {/* Head👦🏼 */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 20,
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

          <Text
            style={{
              fontSize: 14,
              color: "#344863",
              fontWeight: "800",
              textAlign: "center",
            }}
          >
            Arah Kiblat
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <EllipsisVertical size={20} color={"#344863a6"} />
          </View>
        </View>

        {/* Kiblat Masyallah */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-evenly",
            minHeight: "100%",
          }}
        >
          <View
            style={{ justifyContent: "center", alignItems: "center", gap: 6 }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
            >
              <MapPin size={26} color={"#344863"} />
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#344863" }}
              >
                Bogor, Indonesia
              </Text>
            </View>
            <Text style={{ fontSize: 15 }}>
              Putar ke {/* kanan/kiri blablabla° */}
            </Text>
          </View>
          <Image
            source={require("./../../assets/images/compass.png")}
            style={{ width: "70%", height: "70%" }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
