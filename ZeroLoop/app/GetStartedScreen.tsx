import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

interface Props {
  navigation: NavigationProp<any>;
}

export default function GetStartedScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splashLogo.png")}
        style={styles.logo}
      />
      <Text style={[styles.text, { fontSize: 23 }]}>Welcome to ZeroLoop</Text>
      <TouchableOpacity
        style={[styles.button, { top: height * 0.7 }]}
        onPress={() => navigation.navigate("HomeStackNavigator")}
      >
        <Text style={[styles.text]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: height * 0.8 }]}
        onPress={() => navigation.navigate("RestaurantStackNavigator")}
      >
        <Text style={styles.text}>Login as Restaurant</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: width * 0.7,
    height: height * 0.2,
    bottom: height * 0.05,
  },
  text: {
    fontSize: 15,
    fontFamily: "Poppins500Med",
    color: "#ffffff", // Changed text color to black for better visibility
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#0BA0DD",
    padding: 10,
    borderRadius: 10,
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});
