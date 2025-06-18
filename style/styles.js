import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  //App.js
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
  },

  icon: {
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  //App.js

  //Headbar Component
  navHead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  //Headbar Component

  //Message Component
  message: {
    width: "90%",
  },
  text: {
    fontSize: 45,
    fontWeight: 700,
  },
  //Message Component

  //Product Component
  boxProduct: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  box: {
    marginTop: 10,
    width: "48%",
    height: 180,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  iconProduct: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  section: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 500,
  },
  //Product Component

  //AskSearch Component
  boxInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "#DBDBDB",
    paddingRight: 10,
    paddingVertical: 5,
  },
  input: {
    paddingLeft: 30,
    fontSize: 18,
    borderStyle: "solid",
  },
  //AskSearch Component

  //BottomScreen Component
  bottomBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 140,
    height: 80,
    borderRadius: 60,
    backgroundColor: "black",
    paddingHorizontal: 12,
  },
  actionBottomLeft: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 30,
  },

  bottomRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "black",
  },
  //BottomScreen Component
});
