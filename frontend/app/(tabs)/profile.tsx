import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      <View className="items-center mb-4">
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          className="w-24 h-24 rounded-full mb-2"
        />
        <Text className="text-lg font-semibold">Farmer John</Text>
        <Text className="text-gray-500">john@example.com</Text>
      </View>

      <View className="bg-white p-4 rounded-lg">
        <Text className="text-base mb-2">👨‍🌾 About Me</Text>
        <Text className="text-gray-600">
          I am a farmer focusing on sustainable agriculture.
        </Text>
      </View>
    </SafeAreaView>
  );
}
