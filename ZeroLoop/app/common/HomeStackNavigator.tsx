import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const Stack = createNativeStackNavigator<RootStackParamList>();
import HomeScreen from "../PublicHome";
import ChatScreen from "../common/ChatScreen";

type RootStackParamList = {
  HomeScreen: undefined;
  controls: undefined;
  chat: undefined;
  colorSelector: undefined;
};

export default function HomeStack() {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="chat" component={ChatScreen} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </>
  );
}
