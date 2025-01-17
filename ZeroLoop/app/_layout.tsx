import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./SplashScreen";
import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStartedScreen from "./GetStartedScreen";
import HomeStackNavigator from "./common/HomeStackNavigator";
import RestaurantHomeStack from "./common/RestaurantHomeStack";
import { StatusBar } from "expo-status-bar";
import React from "react";

type RootStackParamList = {
  splash: undefined;
  getstarted: undefined;
  HomeStackNavigator: undefined;
  RestaurantStackNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Layout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="splash"
      >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="getstarted" component={GetStartedScreen} />
        <Stack.Screen
          name="HomeStackNavigator"
          component={HomeStackNavigator}
        />
        <Stack.Screen
          name="RestaurantStackNavigator"
          component={RestaurantHomeStack}
        />
      </Stack.Navigator>
    </>
  );
}
