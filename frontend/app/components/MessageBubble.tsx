import { View, Text } from "react-native";

export default function MessageBubble({ sender, text }: { sender: string; text: string }) {
  const isUser = sender === "user";
  return (
    <View className={`my-1 ${isUser ? "items-end" : "items-start"}`}>
      <View
        className={`px-3 py-2 rounded-lg max-w-[70%] ${
          isUser ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <Text className={isUser ? "text-white" : "text-black"}>{text}</Text>
      </View>
    </View>
  );
}
