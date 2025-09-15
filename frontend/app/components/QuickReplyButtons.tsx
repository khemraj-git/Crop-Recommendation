import { View, TouchableOpacity, Text } from "react-native";

export default function QuickReplyButtons({ options, onSelect }: { options: string[]; onSelect: (opt: string) => void }) {
  return (
    <View className="flex-row flex-wrap mb-2">
      {options.map((opt, idx) => (
        <TouchableOpacity
          key={idx}
          className="bg-green-200 px-3 py-1 rounded-full m-1"
          onPress={() => onSelect(opt)}
        >
          <Text>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
