import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Swiper from "react-native-swiper";
import AuthStyle from "../styles/AuthStyle";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

const AuthScreen = () => {
  const navigation = useNavigation();
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [createAccountData, setCreateAccountData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const isRegistrationButtonActive =
    createAccountData.fullName !== "" &&
    createAccountData.email !== "" &&
    createAccountData.password !== "";

  const isLoginButtonActive =
    loginData.email !== "" && loginData.password !== "";

  const getDataCreate = () => {
    try {
      console.log("Full Name:", createAccountData.fullName);
      console.log("Email:", createAccountData.email);
      console.log("Password:", createAccountData.password);
      Toast.show({
        type: "success",
        text1: "Successfully registered account",
        text2: `Welcome here ${createAccountData.fullName}`,
      });
      navigation.navigate("AuthProvider");
    } catch (error) {
      console.log(error);
    }
  };

  const getDataLogin = () => {
    console.log("Email:", loginData.email);
    console.log("Password:", loginData.password);
  };

  return (
    <SafeAreaView style={AuthStyle.container}>
      <View style={AuthStyle.tabBar}>
        <TouchableOpacity
          onPress={() => setActivePageIndex(0)}
          style={[
            AuthStyle.tabItem,
            activePageIndex === 0 && AuthStyle.activeTabItem,
          ]}
        >
          <Text
            style={[
              AuthStyle.tabText,
              activePageIndex === 0 && AuthStyle.activeTabText,
            ]}
          >
            Create Account
          </Text>
          {activePageIndex === 0 && <View style={AuthStyle.underline} />}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActivePageIndex(1)}
          style={[
            AuthStyle.tabItem,
            activePageIndex === 1 && AuthStyle.activeTabItem,
          ]}
        >
          <Text
            style={[
              AuthStyle.tabText,
              activePageIndex === 1 && AuthStyle.activeTabText,
            ]}
          >
            Login
          </Text>
          {activePageIndex === 1 && <View style={AuthStyle.underline} />}
        </TouchableOpacity>
      </View>
      <Swiper
        loop={false}
        showsPagination={false}
        index={activePageIndex}
        onIndexChanged={(index) => setActivePageIndex(index)}
      >
        <KeyboardAvoidingView
          style={AuthStyle.pageContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={AuthStyle.pageContent}>
            <Text style={AuthStyle.inputLabel}>Full Name</Text>
            <View style={AuthStyle.inputContainer}>
              <TextInput
                style={AuthStyle.inputField}
                placeholder="Enter your full name"
                placeholderTextColor="#9CA3AF"
                value={createAccountData.fullName}
                autoCapitalize="none"
                onChangeText={(text) =>
                  setCreateAccountData({
                    ...createAccountData,
                    fullName: text,
                  })
                }
              />
            </View>
            <Text style={AuthStyle.inputLabelSecond}>Email address</Text>
            <View style={AuthStyle.inputContainer}>
              <TextInput
                style={AuthStyle.inputField}
                placeholderTextColor="#9CA3AF"
                placeholder="Eg namaemail@emailkamu.com"
                value={createAccountData.email}
                autoCapitalize="none"
                onChangeText={(text) =>
                  setCreateAccountData({
                    ...createAccountData,
                    email: text,
                  })
                }
              />
            </View>
            <Text style={AuthStyle.inputLabelThird}>Password</Text>
            <View style={AuthStyle.inputContainer}>
              <TextInput
                style={AuthStyle.inputField}
                placeholderTextColor="#9CA3AF"
                placeholder="**** **** ****"
                secureTextEntry
                value={createAccountData.password}
                autoCapitalize="none"
                onChangeText={(text) =>
                  setCreateAccountData({
                    ...createAccountData,
                    password: text,
                  })
                }
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                AuthStyle.registrationButton,
                {
                  backgroundColor: isRegistrationButtonActive
                    ? "#32B768"
                    : "#F4F4F4",
                },
              ]}
              disabled={!isRegistrationButtonActive}
              onPress={getDataCreate}
            >
              <Text
                style={[
                  AuthStyle.registrationButtonText,
                  {
                    color: isRegistrationButtonActive ? "#FFFFFF" : "#9CA3AF",
                  },
                ]}
              >
                Registration
              </Text>
            </TouchableOpacity>
          </View>
          <View style={AuthStyle.underlineBottom} />

          <TouchableOpacity
            activeOpacity={0.7}
            style={AuthStyle.googleSignInBtn}
          >
            <Ionicons
              name="logo-google"
              size={30}
              style={{ right: "30%", top: "18.5%" }}
            />
            <Text style={AuthStyle.googleSignInTxt}>Sign up with Google</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <KeyboardAvoidingView
          style={AuthStyle.pageContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={AuthStyle.pageContent}>
            <Text style={AuthStyle.inputLabelSecond}>Email address</Text>
            <View style={AuthStyle.inputContainer}>
              <TextInput
                style={AuthStyle.inputField}
                placeholderTextColor="#9CA3AF"
                placeholder="Eg namaemail@emailkamu.com"
                value={loginData.email}
                autoCapitalize="none"
                onChangeText={(text) =>
                  setLoginData({
                    ...loginData,
                    email: text,
                  })
                }
              />
            </View>
            <Text style={AuthStyle.inputLabelThird}>Password</Text>
            <View style={AuthStyle.inputContainer}>
              <TextInput
                style={AuthStyle.inputField}
                placeholderTextColor="#9CA3AF"
                placeholder="**** **** ****"
                secureTextEntry
                value={loginData.password}
                autoCapitalize="none"
                onChangeText={(text) =>
                  setLoginData({
                    ...loginData,
                    password: text,
                  })
                }
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[
                AuthStyle.loginButton,
                {
                  backgroundColor: isLoginButtonActive ? "#32B768" : "#F4F4F4",
                },
              ]}
              disabled={!isLoginButtonActive}
              onPress={getDataLogin}
            >
              <Text
                style={[
                  AuthStyle.registrationButtonText,
                  {
                    color: isLoginButtonActive ? "#FFFFFF" : "#9CA3AF",
                  },
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <View style={AuthStyle.underlineBottomLogin} />
          <TouchableOpacity
            activeOpacity={0.7}
            style={AuthStyle.googleSignInBtnLogin}
          >
            <Ionicons
              name="logo-google"
              size={30}
              style={{ right: "30%", top: "18.5%" }}
            />
            <Text style={AuthStyle.googleSignInTxt}>Login in with Google</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Swiper>
    </SafeAreaView>
  );
};

export default AuthScreen;
