import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BookingHistoryAuthPage,
  HomeAuthPage,
  ProfileAuthPage,
} from "../routers/router";
import { Ionicons } from "@expo/vector-icons"; // Import icons from Expo Vector Icons

const Tab = createBottomTabNavigator();

const AuthNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#32B768",
        tabBarStyle: {
          borderRadius: 20,
          // backgroundColor: "#F6F6F6",
          width: "90%",
          alignSelf: "center",
          bottom: "2%",
        },
      }}
    >
      <Tab.Screen
        name="HomeAuthPage"
        component={HomeAuthPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home"
              size={30}
              color={color}
              style={{ top: "30%" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BookingHistoryAuthPage"
        component={BookingHistoryAuthPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="time"
              size={30}
              color={color}
              style={{ top: "30%" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileAuthPage"
        component={ProfileAuthPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person"
              size={30}
              color={color}
              style={{ top: "30%" }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthNavigation;
