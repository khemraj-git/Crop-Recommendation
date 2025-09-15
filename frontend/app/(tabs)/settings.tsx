import { View, Text, Switch, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Settings() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      <Text className="text-lg font-semibold mb-4">⚙️ Settings</Text>

      {/* Notifications */}
      <View className="flex-row justify-between items-center bg-white p-3 rounded-lg mb-2">
        <Text className="text-base">Enable Notifications</Text>
        <Switch />
      </View>

      {/* Dark Mode */}
      <View className="flex-row justify-between items-center bg-white p-3 rounded-lg mb-2">
        <Text className="text-base">Dark Mode</Text>
        <Switch />
      </View>

      {/* Language */}
      <TouchableOpacity className="flex-row justify-between items-center bg-white p-3 rounded-lg mb-2">
        <Text className="text-base">Language</Text>
        <Ionicons name="chevron-forward" size={20} color="gray" />
      </TouchableOpacity>

      {/* Account Settings */}
      <TouchableOpacity className="flex-row justify-between items-center bg-white p-3 rounded-lg mb-2">
        <Text className="text-base">Account Settings</Text>
        <Ionicons name="chevron-forward" size={20} color="gray" />
      </TouchableOpacity>

      {/* About App */}
      <TouchableOpacity className="flex-row justify-between items-center bg-white p-3 rounded-lg mb-2">
        <Text className="text-base">About Krishi Sahay</Text>
        <Ionicons name="information-circle-outline" size={20} color="gray" />
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity className="flex-row justify-center items-center bg-red-100 p-3 rounded-lg mt-6">
        <Ionicons name="log-out-outline" size={22} color="red" />
        <Text className="text-base font-semibold text-red-600 ml-2">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
