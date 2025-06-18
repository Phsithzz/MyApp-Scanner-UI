import { View } from "react-native";

//style
import styles from "../style/styles";
//style

//icon
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
//icon
export default function BottomScreen() {
  return (
    <View style={{ marginTop: 20 }}>
      <View style={styles.bottomBox}>
        <View style={styles.bottomLeft}>
          <View style={styles.actionBottomLeft}>
            <Feather name="layers" size={40} color="black" />
          </View>

          <FontAwesome6 name="circle-user" size={40} color="white" />
        </View>
        <View style={styles.bottomRight}>
          <Ionicons name="add-circle-outline" size={55} color="white" />
        </View>
      </View>
    </View>
  );
}
