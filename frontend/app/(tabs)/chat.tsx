import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import '../globals.css'

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { id: "1", sender: "bot", text: "👋 Hello farmer! Ask me about your crops." },
  ]);

  const handleSend = () => {
    if (!input.trim()) return; // Do nothing if input is empty

    // Add user's message
    const newMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
    };
    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now().toString() + "_bot",
        sender: "bot",
        text: "🌱 You can grow Rice, Maize, or Mustard this season.",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1500);
  };

  // Define the message type
  type Message = {
    id: string;
    sender: string;
    text: string;
  };

  // Render a single message bubble
  const renderMessage = ({ item }: { item: Message }) => (
    <View
      className={`p-3 m-1 max-w-3/4 rounded-lg ${
        item.sender === "user" ? "bg-green-200 self-end" : "bg-gray-200 self-start"
      }`}
    >
      <Text className="text-black">{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Messages List */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={{ padding: 10 }}
      />

      {/* Input Bar */}
      <View className="px-4 pb-6">
        <View className="flex-row items-center bg-[#f0f0f0] rounded-2xl border border-gray-300 px-3 py-2">
          {/* Search Icon (Left) */}
          <TouchableOpacity className="mr-2">
            <Ionicons name="search" size={22} color="#00bfa6" />
          </TouchableOpacity>

          {/* Text Input */}
          <TextInput
            className="flex-1 text-black text-base px-2"
            placeholder="Ask anything..."
            placeholderTextColor="#888"
            value={input}
            onChangeText={setInput}
          />

          {/* Icons on Right */}
          <View className="flex-row items-center space-x-3">
            <TouchableOpacity>
              <Ionicons name="globe-outline" size={22} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="attach-outline" size={22} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="mic-outline" size={22} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSend}>
              <Ionicons name="arrow-forward-circle" size={28} color="#00bfa6" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
