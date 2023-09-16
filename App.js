import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { OnboardingFlow, HomeScreen, AuthScreen } from "./src/routers/router";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingFlow}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
            // presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
