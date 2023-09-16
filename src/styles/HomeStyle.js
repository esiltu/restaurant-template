import { StyleSheet } from "react-native";

// Styles for the HomeScreen
const HomeStyle = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  containerViewImage: { top: "15%" },
  containerImageStyle: {
    width: "75%",
    height: "52.5%",
    alignSelf: "center",
  },
  containerTextView: { bottom: "7.5%" },
  containerTextStyle: {
    fontSize: 24,
    color: "#1F2937",
    textAlign: "center",

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
    top: "0%",
    margin: "5%",
  },
  containerBtnCreateStyle: {
    backgroundColor: "#32B768",
    width: "75%",
    height: "19%",
    alignSelf: "center",
    borderRadius: 15,
  },
  containerBtnLoginStyle: {
    backgroundColor: "#9AF2C5",
    width: "75%",
    height: "19%",
    alignSelf: "center",
    borderRadius: 15,
  },
  containerBtnTxtCreateStyle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    top: "30%",
  },
  containerBtnTxtLoginStyle: {
    color: "#10B981",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
    top: "30%",
  },
  containerAgreeTermStyle: {
    bottom: "17.5%",
    alignSelf: "center",
  },
  containerAgreeTextStyle: {
    fontSize: 15,
    fontWeight: "normal",
    width: "60%",
    textAlign: "center",
    alignSelf: "center",
  },
  color: {
    color: "#32B768",
  },
});

export default HomeStyle;
