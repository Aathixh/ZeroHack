import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  BackHandler,
  Alert,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useIsFocused } from "@react-navigation/native";
import { useFonts } from "expo-font";

type RootStackParamList = {};

const RestaurantHome = () => {
  const [loaded] = useFonts({
    Poppins500Med: require("../assets/fonts/Poppins500Med.ttf"),
  });
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Restaurant</Text>
        <Image
          style={styles.logo}
          source={require("../assets/images/star.png")}
        />
        <Text style={{ color: "#ffffff", left: 60, bottom: 15 }}>4.2</Text>
      </View>

      <TouchableOpacity
        style={[styles.card2, { marginVertical: 1 }]}
        onPress={() => {}}
      >
        <Text style={styles.cardText2}>SELL FOOD</Text>
        <Text style={styles.cardText3}>
          Delicious surplus food at unbeatable prices,{"\n"}quality-checked by
          AI, saving your wallet and{"\n"}the planet!
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: "#0B0B0D",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 16,
    marginTop: 70,
  },
  title: {
    fontSize: 40,
    color: "#FFFFFF",
    width: "70.47%",
    bottom: "20%",
    fontFamily: "Poppins500Med",
  },
  logo: {
    width: 25,
    height: 25,
    color: "#ffffff",
    position: "absolute",
    right: 45,
    bottom: 40,
  },
  sectionTitle1: {
    fontSize: 20,
    color: "#FFFFFF",
    marginVertical: "1%",
    paddingTop: "12%",
  },
  sectionTitle2: {
    fontSize: 20,
    fontFamily: "Poppins500Med",
    color: "#FFFFFF",
    marginVertical: "1 %",
    marginBottom: "2%",
    bottom: "5%",
  },

  card: {
    width: "23%",
    backgroundColor: "#2F2F2F",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    gap: "0%",
  },
  card2: {
    width: "100%",
    backgroundColor: "#2F2F2F",
    height: 100,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    gap: "0%",
  },
  icon: {
    width: 38,
    height: 40,
  },
  cardText: {
    color: "#fff",
    marginTop: 8,
    fontWeight: "500",
    letterSpacing: -0.07,
    lineHeight: 10,
    fontFamily: "Poppins",
    fontSize: 9,
    textAlign: "left",
    textOverflow: "ellipsis",
  },
  cardText2: {
    color: "#fff",
    marginTop: 8,
    letterSpacing: -0.07,
    lineHeight: 27,
    fontFamily: "Poppins500Med",
    fontSize: 25,
    left: "3%",
    top: -5,
    // textAlign: "left",
    // textOverflow: "ellipsis",
  },
  cardText3: {
    color: "#C2B5B5",
    letterSpacing: -0.07,
    lineHeight: 13,
    fontFamily: "Poppins500Med",
    fontSize: 10,
    left: "3%",
  },
});

export default RestaurantHome;
