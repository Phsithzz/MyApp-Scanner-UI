import { ScrollView, View } from "react-native";

//style
import styles from "./style/styles";
//style

//component
import Headbar from "./components/Headbar";
import Message from "./components/Message";
import Product from "./components/Product";
import AskSearch from "./components/AskSearch";
import BottomScreen from "./components/BottomScreen";
//component

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Headbar />
      <Message />
      <Product />
      <AskSearch />
      <BottomScreen />
    </View>
    </ScrollView>
  );
}
