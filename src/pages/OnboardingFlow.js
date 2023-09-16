import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import {
  OnboardingImageOne,
  OnboardingImageTwo,
  OnboardingImageThree,
} from "../assets/images/onboardingandOther/router";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "#32B768" : "#E6E6E6";

  return (
    <View
      style={{
        width: 10,
        height: 10,
        marginHorizontal: 5,
        backgroundColor,
        borderRadius: 20,
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
      pages={[
        {
          backgroundColor: "#FFFFFF",
          image: (
            <Image
              source={OnboardingImageOne}
              style={{ width: "70%", height: "45%", top: "20%" }}
            />
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
            <Image
              source={OnboardingImageTwo}
              style={{ width: "70%", height: "60%", top: "20%" }}
            />
          ),
          titleStyles: { bottom: "300%", fontWeight: "600", fontSize: 24 },
          subTitleStyles: { bottom: "320%" },
          title: "Select the Favorites Menu",
          subtitle:
            "Now eat well, don't leave the house,You can choose your favorite food only with one click",
        },
        {
          backgroundColor: "#FFFFFF",
          image: (
            <Image
              source={OnboardingImageThree}
              style={{ width: "75%", height: "60%", top: "20%" }}
            />
          ),
          titleStyles: { bottom: "300%", fontWeight: "600", fontSize: 24 },
          subTitleStyles: { bottom: "320%" },
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
