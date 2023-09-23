import { Text, View, SafeAreaView } from "react-native";
import React from "react";
import ForgotPassStyle from "../styles/ForgotPassStyle";

const ForgotPassword = () => {
  return (
    <SafeAreaView style={ForgotPassStyle.containerScreen}>
      <View style={ForgotPassStyle.viewTextStyle}>
        <Text style={ForgotPassStyle.forgotPassStyleText}>Forgot Password</Text>
        <Text>Enter your registered email below</Text>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;


