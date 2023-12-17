import React, { useRef } from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import {
  OnboardingImageOne,
  OnboardingImageTwo,
  OnboardingImageThree,
  OnboardingAnimationOne,
} from "../assets/images/onboardingandOther/router";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "#32B768" : "#E6E6E6";

  return (
    <View
      style={{
        width: 15,
        height: 10,
        marginHorizontal: 5,
        backgroundColor,
        borderRadius: 100,
        // bottom: "1000%",
      }}
    />
  );
};

const nextButtonComponent = ({ ...props }) => {
  let color = "#32B768";
  return (
    <TouchableOpacity {...props} style={{ right: "15%" }}>
      <Ionicons name="arrow-forward-outline" size={35} color={color} />
    </TouchableOpacity>
  );
};

const doneButtonComponent = ({ ...props }) => {
  let color = "#32B768";
  return (
    <TouchableOpacity style={{ right: "15%" }} {...props}>
      <Ionicons name="checkmark-outline" size={35} color={color} />
    </TouchableOpacity>
  );
};

const skipButtonComponent = ({ ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={{ fontSize: 20, left: "15%", color: "#4B5563" }}>Skip</Text>
    </TouchableOpacity>
  );
};

const OnboardingFlow = () => {
  // Finish button
  const navigation = useNavigation();
  const animation = useRef(null);
  return (
    <Onboarding
      bottomBarHighlight={false}
      // SkipButtonComponent={() => navigation.navigate("HomeScreen")}
      onSkip={() => navigation.navigate("HomeScreen")}
      onDone={() => navigation.navigate("HomeScreen")}
      DoneButtonComponent={doneButtonComponent}
      NextButtonComponent={nextButtonComponent}
      SkipButtonComponent={skipButtonComponent}
      DotComponent={Dots}
      containerStyles={{ paddingHorizontal: 15 }}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <View>
              <LottieView
                source={require("../assets/images/onboardingandOther/animation.json")}
                autoPlay
                loop
                ref={animation}
                style={{ width: 300, height: 300 }}
                speed={0.5}
              />
            </View>
          ),
          titleStyles: { bottom: "150%", fontWeight: "600", fontSize: 24 },
          subTitleStyles: { bottom: "100%" },
          title: "Nearby restaurants",
          subtitle:
            "You don't have to go to far to find a good restaurant, we have provided all the restaurants that is near you",
        },
        {
          backgroundColor: "#FFFFFF",
          image: (
            <View>
              <LottieView
                source={require("../assets/images/onboardingandOther/animationsecond.json")}
                autoPlay
                loop
                ref={animation}
                style={{ width: 250, height: 250 }}
                speed={0.5}
              />
            </View>
          ),
          titleStyles: { bottom: "100%", fontWeight: "600", fontSize: 24 },
          subTitleStyles: { bottom: "100%" },
          title: "Select the Favorites Menu",
          subtitle:
            "Now eat well, don't leave the house,You can choose your favorite food only with one click",
        },
        {
          backgroundColor: "#FFFFFF",
          image: (
            <View>
              <LottieView
                source={require("../assets/images/onboardingandOther/animationthird.json")}
                autoPlay
                loop
                ref={animation}
                style={{ width: 250, height: 250 }}
                speed={0.5}
              />
            </View>
          ),
          titleStyles: { bottom: "160%", fontWeight: "600", fontSize: 24 },
          subTitleStyles: { bottom: "180%" },
          title: "Good food at a cheap price",
          subtitle:
            "You can eat at a expensive restaurants with affordable price",
        },
      ]}
    />
  );
};

export default OnboardingFlow;

// Now eat well, don't leave the house,You can choose your favorite food only with one click
