import { StyleSheet } from "react-native";

// Styles for the HomeScreen
const HomeStyle = StyleSheet.create({
  containerHome: {
    flex: 1,
  },
  containerViewImage: { top: "15%" },
  containerImageStyle: {
    width: "75%",
    height: "65%",
    alignSelf: "center",
  },
  containerTextView: { top: "0%" },
  containerTextStyle: {
    fontSize: 24,
    color: "#1F2937",
    textAlign: "center",
    top: "5%",
    fontWeight: "600",
  },
  containerTextSecondStyle: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#4B5563",
    textAlign: "center",
    width: "70%",
    alignSelf: "center",
    top: "25%",
  },
  containerOptionAuthStyle: {
    top: "10%",
    margin: "5%",
  },
  containerBtnCreateStyle: {
    backgroundColor: "#32B768",
  },
  containerBtnLoginStyle: {
    backgroundColor: "#D1FAE5",
  },
  containerBtnTxtCreateStyle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  containerBtnTxtLoginStyle: {
    color: "#10B981",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
});

export default HomeStyle;
