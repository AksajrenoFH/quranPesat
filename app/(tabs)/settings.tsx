import {
  Bell,
  ChevronRight,
  CircleQuestionMark,
  Coins,
  Info,
  LogIn,
  Mail,
  Moon,
  Palette,
  Share2,
  Shield,
  Star,
  User,
} from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () => setIsDarkMode((prev) => !prev);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            paddingBottom: 12,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              padding: 16,
              paddingBottom: 0,
            }}
          >
            Pengaturan
          </Text>
        </View>
        <View style={{ flex: 1, padding: 16 }}>
          {/* Propil */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              justifyContent: "space-between",
              backgroundColor: "#EDEBDF",
              paddingHorizontal: 16,
              paddingVertical: 10,
              borderRadius: 16,
            }}
          >
            <View
              style={{
                backgroundColor: "#D6D7D1",
                padding: 8,
                borderRadius: 100,
              }}
            >
              <User size={26} color="#788C8D" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Masuk Akun
              </Text>
              <Text style={{ fontSize: 12, color: "#0000008e" }}>
                Sync bookmark & progress
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#738D8E",
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <LogIn size={18} color="#fff" />
              <Text style={{ color: "#fff" }}>Masuk</Text>
            </View>
          </View>
          {/* notip */}
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#0000008e",
                marginBottom: 12,
              }}
            >
              Notifikasi
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                justifyContent: "space-between",
                backgroundColor: "#EDEBDF",
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderRadius: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: "#D6D7D1",
                  padding: 8,
                  borderRadius: 100,
                }}
              >
                <Bell size={26} color="#788C8D" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Pengaturan Notifikasi
                </Text>
                <Text style={{ fontSize: 12, color: "#0000008e" }}>
                  Waktu sholat, ayat harian
                </Text>
              </View>
              <ChevronRight size={18} color="#0000008e" />
            </TouchableOpacity>
          </View>
          {/* tampilan, awas demam panggung */}
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#0000008e",
                marginBottom: 12,
              }}
            >
              Tampilan
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                justifyContent: "space-between",
                backgroundColor: "#EDEBDF",
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderTopEndRadius: 16,
                borderTopStartRadius: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: "#D6D7D1",
                  padding: 8,
                  borderRadius: 100,
                }}
              >
                <Moon size={26} color="#788C8D" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Mode Gelap
                </Text>
                <Text style={{ fontSize: 12, color: "#0000008e" }}>
                  Tampilan lebih nyaman di malam hari
                </Text>
              </View>
              <Switch
                trackColor={{ false: "#d1d1d1", true: "#73868e" }}
                thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isDarkMode}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                justifyContent: "space-between",
                backgroundColor: "#EDEBDF",
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderBottomEndRadius: 16,
                borderBottomStartRadius: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: "#D6D7D1",
                  padding: 8,
                  borderRadius: 100,
                }}
              >
                <Palette size={26} color="#788C8D" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Ukuran Font Arab
                </Text>
                <Text style={{ fontSize: 12, color: "#0000008e" }}>Sedang</Text>
              </View>
              <ChevronRight size={18} color="#0000008e" />
            </TouchableOpacity>
          </View>
          {/* Dukungan, gak mao yahahahah */}
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#0000008e",
                marginBottom: 12,
              }}
            >
              Dukungan
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                justifyContent: "space-between",
                backgroundColor: "#EDEBDF",
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderTopEndRadius: 16,
                borderTopStartRadius: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: "#D6D7D1",
                  padding: 8,
                  borderRadius: 100,
                }}
              >
                <Coins size={26} color="#788C8D" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Dukung Developer
                </Text>
                <Text style={{ fontSize: 12, color: "#0000008e" }}>
                  Kontribusi untuk biaya maintenance & fitur baru
                </Text>
              </View>
              <ChevronRight size={18} color="#0000008e" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                justifyContent: "space-between",
                backgroundColor: "#EDEBDF",
                paddingHorizontal: 16,
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#D6D7D1",
                  padding: 8,
                  borderRadius: 100,
                }}
              >
                <Star size={26} color="#788C8D" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Beri Rating
                </Text>
                <Text style={{ fontSize: 12, color: "#0000008e" }}>
                  Bantu kami dengan memberikan rating
                </Text>
              </View>
              <ChevronRight size={18} color="#0000008e" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                justifyContent: "space-between",
                backgroundColor: "#EDEBDF",
                paddingHorizontal: 16,
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#D6D7D1",
                  padding: 8,
                  borderRadius: 100,
                }}
              >
                <Share2 size={26} color="#788C8D" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Bagikan Aplikasi
                </Text>
                <Text style={{ fontSize: 12, color: "#0000008e" }}>
                  Ajak teman menggunakan aplikasi ini
                </Text>
              </View>
              <ChevronRight size={18} color="#0000008e" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                justifyContent: "space-between",
                backgroundColor: "#EDEBDF",
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderBottomEndRadius: 16,
                borderBottomStartRadius: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: "#D6D7D1",
                  padding: 8,
                  borderRadius: 100,
                }}
              >
                <Mail size={26} color="#788C8D" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Kirim Feedback
                </Text>
                <Text style={{ fontSize: 12, color: "#0000008e" }}>
                  Sampaikan saran dan masukan
                </Text>
              </View>
              <ChevronRight size={18} color="#0000008e" />
            </TouchableOpacity>
          </View>
          {/* tenang eh tentang */}
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                color: "#0000008e",
                marginBottom: 12,
              }}
            >
              Tentang
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                justifyContent: "space-between",
                backgroundColor: "#EDEBDF",
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderTopEndRadius: 16,
                borderTopStartRadius: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: "#D6D7D1",
                  padding: 8,
                  borderRadius: 100,
                }}
              >
                <Info size={26} color="#788C8D" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Versi Aplikasi
                </Text>
                <Text style={{ fontSize: 12, color: "#0000008e" }}>
                  Versi 1.0.0
                </Text>
              </View>
              <ChevronRight size={18} color="#0000008e" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                justifyContent: "space-between",
                backgroundColor: "#EDEBDF",
                paddingHorizontal: 16,
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#D6D7D1",
                  padding: 8,
                  borderRadius: 100,
                }}
              >
                <Shield size={26} color="#788C8D" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Kebijakan Privasi
                </Text>
              </View>
              <ChevronRight size={18} color="#0000008e" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                justifyContent: "space-between",
                backgroundColor: "#EDEBDF",
                paddingHorizontal: 16,
                paddingVertical: 10,
                borderBottomEndRadius: 16,
                borderBottomStartRadius: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: "#D6D7D1",
                  padding: 8,
                  borderRadius: 100,
                }}
              >
                <CircleQuestionMark size={26} color="#788C8D" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  Bantuan & FAQ
                </Text>
              </View>
              <ChevronRight size={18} color="#0000008e" />
            </TouchableOpacity>
          </View>
          {/* puter */}
          <View
            style={{ marginTop: 24, alignItems: "center", paddingBottom: 70 }}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 12, color: "#0000004e" }}
            >
              Quran Pesat v1.0.0
            </Text>
            <Text style={{ fontSize: 12, color: "#0000003e", marginTop: 4 }}>
              Made with ❤️ for Muslims
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
