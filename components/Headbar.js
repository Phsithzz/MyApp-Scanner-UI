import { View } from "react-native";

//style
import styles from "../style/styles";
//style

//icon
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
//icon

export default function Headbar() {
  return (
    <View style={styles.navHead}>
      <View style={styles.icon}>
        <AntDesign name="questioncircleo" size={30} color="black" />
      </View>
      <View style={styles.icon}>
        <Ionicons name="notifications-outline" size={30} color="black" />
      </View>
    </View>
  );
}
