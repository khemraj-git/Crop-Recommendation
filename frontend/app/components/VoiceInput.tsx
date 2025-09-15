import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function VoiceInput() {
  const startVoice = () => {
    console.log("🎤 Listening... (voice input prototype)");
  };

  return (
    <TouchableOpacity onPress={startVoice} className="ml-2">
      <Ionicons name="mic" size={24} color="red" />
    </TouchableOpacity>
  );
}
