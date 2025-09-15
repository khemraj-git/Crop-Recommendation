import { ActivityIndicator, View } from "react-native";

export default function Loader() {
  return (
    <View className="py-2">
      <ActivityIndicator size="small" color="green" />
    </View>
  );
}
