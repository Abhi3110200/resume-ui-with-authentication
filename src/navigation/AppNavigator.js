import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screen/LoginScreen";
import CreateAccount from "../screen/CreateAccount";
import HomeScreen from "../screen/HomeScreen";
import useAuth from "./../../hooks/useAuth";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="home"
        >
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="login"
        >
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="create" component={CreateAccount} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default AppNavigator;
