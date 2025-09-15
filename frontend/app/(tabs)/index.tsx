import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; 
import homeImage from "./home.jpg";
import riceImage from "./home.jpg"; // 👈 Crop image

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Background Image */}
      <ImageBackground source={homeImage} className="w-full h-1/3">
        {/* Transparent Card */}
        <View className="absolute bottom-6 left-4 right-4 bg-black/40 p-4 rounded-xl">
          <Text className="text-white text-lg font-semibold">
            Welcome to Krishi Sahay
          </Text>
        </View>
      </ImageBackground>

      {/* Recommendation Section */}
      <View className="p-4">
        {/* Market Price Recommendation */}
        <View className="mb-4">
          <View className="flex-row items-center mb-2">
            <Ionicons name="cash-outline" size={28} color="#4CAF50" />
            <Text className="ml-3 text-gray-800 font-semibold text-lg">
              Crop Recommendation (Market Price)
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/recommendation/market")}
            className="bg-green-100 p-4 rounded-xl shadow"
          >
            <Text className="text-gray-700 font-medium">
              Suggested Crop: Rice 🌾
            </Text>
            <Image
              source={riceImage}
              className="w-full h-40 mt-3 rounded-lg"
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>

        {/* Location Recommendation */}
        <View className="mb-4">
          <View className="flex-row items-center mb-2">
            <Ionicons name="location-outline" size={28} color="#2196F3" />
            <Text className="ml-3 text-gray-800 font-semibold text-lg">
              Crop Recommendation (Assam)
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/recommendation/location")}
            className="bg-blue-100 p-4 rounded-xl shadow"
          >
            <Text className="text-gray-700 font-medium">
              Suggested Crop: Rice 🌾
            </Text>
            <Image
              source={riceImage}
              className="w-full h-40 mt-3 rounded-lg"
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Floating Chat Button */}
      <TouchableOpacity
        onPress={() => router.push("/chat")}
        className="absolute bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg"
      >
        <Ionicons name="chatbubble-ellipses" size={28} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
