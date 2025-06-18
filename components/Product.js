import { View, Text } from "react-native";

//style
import styles from "../style/styles";
//style

//icon
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
//icon

export default function Product() {
  return (
    <View style={styles.boxProduct}>
      <View style={[styles.box, { backgroundColor: "#8DD8FF" }]}>
        <View style={styles.iconProduct}>
          <MaterialCommunityIcons name="line-scan" size={40} color="black" />
        </View>
        <Text style={styles.section}>Scan</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#F9E897" }]}>
        <View style={styles.iconProduct}>
          <FontAwesome6 name="edit" size={40} color="black" />
        </View>
        <Text style={styles.section}>Edit</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#B0DB9C" }]}>
        <View style={styles.iconProduct}>
          <AntDesign name="retweet" size={40} color="black" />
        </View>
        <Text style={styles.section}>Convert</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "#F79B72" }]}>
        <View style={styles.iconProduct}>
          <MaterialCommunityIcons
            name="robot-excited-outline"
            size={40}
            color="black"
          />
        </View>
        <Text style={styles.section}>Ask AI</Text>
      </View>
    </View>
  );
}
