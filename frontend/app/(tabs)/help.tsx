import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Help() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      <Text className="text-lg font-semibold mb-4">❓ Help & Support</Text>

      <View className="bg-white p-4 rounded-lg mb-2">
        <Text className="text-base font-medium">How do I use this app?</Text>
        <Text className="text-gray-600 mt-1">
          Type your questions in the chat, and the AI will suggest crops and tips.
        </Text>
      </View>

      <View className="bg-white p-4 rounded-lg mb-2">
        <Text className="text-base font-medium">Contact Support</Text>
        <Text className="text-gray-600 mt-1">
          Email us at support@agriapp.com for.
        </Text>
      </View>
    </SafeAreaView>
  );
}
