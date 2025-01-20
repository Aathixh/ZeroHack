import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const Stack = createNativeStackNavigator<RootStackParamList>();
import HomeScreen from "../PublicHome";
import ChatScreen from "../common/ChatScreen";
import Food from "../Food";
import Scrape from "../ScrapeScreen";
import Donate from "../Donate";

type RootStackParamList = {
  HomeScreen: undefined;
  chat: undefined;
  food: undefined;
  scrape: undefined;
  donate: undefined;
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
          <Stack.Screen name="food" component={Food} />
          <Stack.Screen name="scrape" component={Scrape} />
          <Stack.Screen name="donate" component={Donate} />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </>
  );
}
