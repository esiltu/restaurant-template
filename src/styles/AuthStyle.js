import { StyleSheet } from "react-native";

const AuthStyle = StyleSheet.create({
  container: {
    top: "30%",
    flex: 0.7,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  tabBar: {
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    height: 50,
  },
  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTabItem: {
    backgroundColor: "#FFFFFF",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#89909E",
  },
  activeTabText: {
    color: "#32B768", // Change the text color for active tabs
  },
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageContent: {
    bottom: "7%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pageText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  underline: {
    borderRadius: 100,
    top: "10%",
    backgroundColor: "#32B768", // Change the color to match the active tab's color
    height: 2.5, // Adjust the height of the underline
    width: "50%", // Adjust the width of the underline as needed
    alignSelf: "center", // Center the underline horizontally
    marginTop: 4, // Add space between the text and the underline
  },
  underlineBottom: {
    bottom: "19%",
    borderRadius: 100,
    backgroundColor: "#D2D4D8", // Change the color to match the active tab's color
    height: 1.5, // Adjust the height of the underline
    width: "50%", // Adjust the width of the underline as needed
    alignSelf: "center", // Center the underline horizontally
    marginTop: 4, // Add space between the text and the underline
  },
  underlineBottomLogin: {
    bottom: "22%",
    borderRadius: 100,
    backgroundColor: "#D2D4D8", // Change the color to match the active tab's color
    height: 1.5, // Adjust the height of the underline
    width: "50%", // Adjust the width of the underline as needed
    alignSelf: "center", // Center the underline horizontally
    marginTop: 4, // Add space between the text and the underline
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    height: "10%", // Fixed height for input container
    marginVertical: 10, // Added margin for spacing between input containers
    borderWidth: 1,
    borderColor: "#89909E",
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  inputLabel: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "700",
    color: "#374151",
    right: "35%",
  },
  inputLabelSecond: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "700",
    color: "#374151",
    right: "31%",
  },
  inputLabelThird: {
    textAlign: "left",
    fontSize: 15,
    fontWeight: "700",
    color: "#374151",
    right: "35%",
  },
  inputField: {
    flex: 1,
    fontSize: 16,
  },
  registrationButton: {
    top: "2.5%",
    borderRadius: 12,
    paddingHorizontal: "19.5%",
    paddingVertical: "4%",
    alignItems: "center",
  },
  registrationButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  loginButton: {
    top: "5%",
    borderRadius: 12,
    paddingHorizontal: "27.5%",
    paddingVertical: "4%",
    alignItems: "center",
  },
  googleSignInBtn: {
    bottom: "16.5%",
    borderRadius: 12,
    paddingHorizontal: "15%",
    paddingVertical: "0%",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
  },
  googleSignInBtnLogin: {
    bottom: "20%",
    borderRadius: 12,
    paddingHorizontal: "15%",
    paddingVertical: "0%",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
  },
  googleSignInTxt: {
    textAlign: "center",
    left: "10%",
    color: "#222222",
    fontWeight: "bold",
    fontSize: 15,
    bottom: "30%",
  },
  forgotPasswordBtn: {
    right: "0%",
    alignSelf: "flex-end",
  },
  forgotPasswordTxt: {
    textAlign: "right",
    color: "#32B768",
    fontWeight: "700",
  },
});

export default AuthStyle;
