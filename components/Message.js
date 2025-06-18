import { View, Text } from "react-native";

//style
import styles from "../style/styles";
//style

export default function Message() {
  return (
    <View style={{ marginTop: 40 }}>
      <View style={styles.message}>
        <Text style={styles.text}>Hi Peter</Text>
        <Text style={styles.text}>How can I help</Text>
        <Text style={styles.text}>You today?</Text>
      </View>
    </View>
  );
}
