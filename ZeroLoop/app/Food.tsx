import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Food = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cc}>
        <TouchableOpacity
          style={[styles.card2, { marginVertical: 1 }]}
          onPress={() => {}}
        >
          <Text style={styles.cardText2}>FOOD</Text>
          <Image
            source={require("../assets/images/food1.jpg")}
            style={{ height: 150, width: 150, left: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card2, { marginVertical: 1 }]}
          onPress={() => {}}
        >
          <Text style={styles.cardText2}>FOOD</Text>
          <Image
            source={require("../assets/images/food1.jpg")}
            style={{ height: 150, width: 150, left: 5 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cc}>
        <TouchableOpacity
          style={[styles.card2, { marginVertical: 1 }]}
          onPress={() => {}}
        >
          <Text style={styles.cardText2}>FOOD</Text>
          <Image
            source={require("../assets/images/food1.jpg")}
            style={{ height: 150, width: 150, left: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card2, { marginVertical: 1 }]}
          onPress={() => {}}
        >
          <Text style={styles.cardText2}>FOOD</Text>
          <Image
            source={require("../assets/images/food1.jpg")}
            style={{ height: 150, width: 150, left: 5 }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  card2: {
    width: "50%",
    backgroundColor: "#2F2F2F",
    height: 250,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    top: 70,
    left: 10,
    justifyContent: "center",
  },
  cardText2: {
    color: "#fff",
    marginTop: 8,
    letterSpacing: -0.07,
    lineHeight: 27,
    fontFamily: "Poppins500Med",
    fontSize: 25,
    left: "3%",
    top: -15,
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
  cc: {
    flexDirection: "row",
    marginTop: 20,
  },
});
export default Food;
