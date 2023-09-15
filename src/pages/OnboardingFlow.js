import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import {
  OnboardingImageOne,
  OnboardingImageTwo,
  OnboardingImageThree,
} from "../assets/images/onboarding/router";
import { Ionicons } from "@expo/vector-icons";

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? "#32B768" : "#FFFFFF";

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

const OnboardingFlow = () => {
  return (
    <Onboarding
      NextButtonComponent={nextButtonComponent}
      DotComponent={Dots}
      pages={[
        {
          backgroundColor: "#FFFFFF",
          image: (
            <Image
              source={OnboardingImageOne}
              style={{ width: "85%", height: "50%" }}
            />
          ),
          title: "Nearby restaurants",
          subtitle:
            "You don't have to go to far to find a good restaurant, we have provided all the restaurants that is near you",
        },
        {
          backgroundColor: "#FFFFFF",
          image: (
            <Image
              source={OnboardingImageTwo}
              style={{ width: "85%", height: "68%" }}
            />
          ),
          title: "Select the Favorites Menu",
          subtitle:
            "Now eat well, don't leave the house,You can choose your favorite food only with one click",
        },
        {
          backgroundColor: "#FFFFFF",
          image: (
            <Image
              source={OnboardingImageThree}
              style={{ width: "85%", height: "65%" }}
            />
          ),
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
