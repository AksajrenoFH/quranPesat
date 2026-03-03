import { useRouter } from "expo-router";
import {
  ChevronLeft,
  SendHorizontal,
  Sparkles,
  Trash2,
} from "lucide-react-native";
import React, { useRef } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const API_KEY = "AIzaSyDRWbRFrCJQWLEWnV8R35U4Y6JhnesATQ8";

export default function ai() {
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);

  const [messages, setMessages] = React.useState<any[]>([]);
  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input;
    const newMessages = [...messages, { role: "user", text: userText }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Anda adalah Asisten Islami berbasis AI... (prompt tetap sama) ... Pertanyaan: ${userText}`,
                  },
                ],
              },
            ],
          }),
        },
      );

      const data = await response.json();
      const aiReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Maaf, terjadi kesalahan.";
      setMessages((prev) => [...prev, { role: "ai", text: aiReply }]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Maaf, koneksi bermasalah." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCF6EA" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        {/* HEADER */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: "#FCF6EA",
            borderBottomWidth: 1,
            borderColor: "#E5E7EB",
          }}
        >
          <TouchableOpacity onPress={() => router.replace("/(tabs)")}>
            <ChevronLeft size={28} color={"#344863"} />
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 8,
            }}
          >
            <View
              style={{
                padding: 6,
                borderRadius: 12,
                backgroundColor: "#344863",
              }}
            >
              <Sparkles size={20} color={"#fff"} />
            </View>
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "800", color: "#344863" }}
              >
                Asisten Islami AI
              </Text>
              <Text style={{ fontSize: 11, color: "#7F7E7D" }}>
                Fokus tanya jawab seputar Islam
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setMessages([])}
            style={{ padding: 8, borderRadius: 12, backgroundColor: "#FEE2E2" }}
          >
            <Trash2 size={20} color={"#EF4444"} />
          </TouchableOpacity>
        </View>

        <ScrollView
          ref={scrollRef}
          onContentSizeChange={() =>
            scrollRef.current?.scrollToEnd({ animated: true })
          }
          style={{ flex: 1, paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
        >
          {/* WELCOME MESSAGE */}
          {messages.length === 0 && (
            <View style={{ marginTop: 20, gap: 15 }}>
              <View
                style={{
                  backgroundColor: "#fff",
                  padding: 15,
                  borderRadius: 15,
                  borderTopLeftRadius: 0,
                  borderWidth: 1,
                  borderColor: "#E5E7EB",
                }}
              >
                <Text style={{ color: "#344863", lineHeight: 20 }}>
                  Assalamualaikum! Saya siap membantu pertanyaan seputar Islam:
                  Al-Quran, hadist, fiqih, doa, dan sejarah Islam.
                </Text>
              </View>

              <Text
                style={{ fontWeight: "700", color: "#344863", marginTop: 10 }}
              >
                Contoh pertanyaan:
              </Text>
              {[
                "Apa amalan terbaik setelah sholat?",
                "Zakat maal vs Zakat fitrah",
                "Doa ketika gelisah",
              ].map((q, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setInput(q)}
                  style={{
                    backgroundColor: "#fff",
                    padding: 12,
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: "#34486340",
                  }}
                >
                  <Text style={{ color: "#344863", fontSize: 13 }}>{q}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* CHAT MESSAGES */}
          <View style={{ paddingVertical: 20 }}>
            {messages.map((item, index) => (
              <View
                key={index}
                style={{
                  alignSelf: item.role === "user" ? "flex-end" : "flex-start",
                  backgroundColor: item.role === "user" ? "#344863" : "#fff",
                  padding: 12,
                  borderRadius: 15,
                  borderBottomRightRadius: item.role === "user" ? 2 : 15,
                  borderBottomLeftRadius: item.role === "ai" ? 2 : 15,
                  marginBottom: 12,
                  maxWidth: "85%",
                  elevation: 1,
                  shadowColor: "#000",
                  shadowOpacity: 0.05,
                  shadowRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: item.role === "user" ? "#fff" : "#344863",
                    fontSize: 14,
                    lineHeight: 20,
                  }}
                >
                  {item.text}
                </Text>
              </View>
            ))}
            {isLoading && (
              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "#fff",
                  padding: 12,
                  borderRadius: 15,
                  borderBottomLeftRadius: 2,
                }}
              >
                <ActivityIndicator size="small" color="#344863" />
              </View>
            )}
          </View>
        </ScrollView>

        {/* INPUT AREA */}
        <View
          style={{
            padding: 16,
            backgroundColor: "#FCF6EA",
            borderTopWidth: 1,
            borderColor: "#E5E7EB",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Tanya sesuatu..."
            placeholderTextColor="#9CA3AF"
            multiline
            style={{
              flex: 1,
              backgroundColor: "#fff",
              paddingHorizontal: 16,
              paddingVertical: 10,
              borderRadius: 20,
              maxHeight: 100,
              fontSize: 14,
              borderWidth: 1,
              borderColor: "#E5E7EB",
            }}
          />
          <TouchableOpacity
            onPress={handleSend}
            disabled={!input.trim() || isLoading}
            style={{
              backgroundColor: input.trim() ? "#344863" : "#9CA3AF",
              width: 45,
              height: 45,
              borderRadius: 22.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SendHorizontal size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
