import { View, TextInput } from "react-native";
//style
import styles from "../style/styles";
//style

//icon
import Feather from "@expo/vector-icons/Feather";
//icon

export default function AskSearch() {
  return (
    <View style={{ marginTop: 20 }}>
      <View style={styles.boxInput}>
        <TextInput
          placeholder="Ask or Search for anything"
          keyboardType="default"
          style={styles.input}
        />
        <Feather name="search" size={35} color="black" />
      </View>
    </View>
  );
}
