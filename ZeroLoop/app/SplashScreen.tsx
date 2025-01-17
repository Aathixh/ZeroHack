import React, { useEffect } from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
import { useFonts } from "expo-font";

interface Props {
  navigation: NavigationProp<any>;
}

const SplashScreen = ({ navigation }: Props) => {
  const [loaded] = useFonts({
    Poppins500Med: require("../assets/fonts/Poppins500Med.ttf"),
  });

  useEffect(() => {
    setTimeout(() => {
      console.log("SplashScreen");
      navigation.navigate("getstarted");
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/splashLogo.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>ZERO LOOP</Text>
    </View>
  );
};

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
  },
  text: {
    fontSize: 30,
    fontFamily: "Poppins500Med",
    color: "#ffffff",
    top: 1,
    fontWeight: "500",
  },
});
export default SplashScreen;
