import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const image = require("../assets/loadingImg.png");

const landingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={stylesButton.container}>
          <TouchableOpacity
            style={stylesButton.button}
            onPress={() => navigation.navigate("List1")}
          >
            <Text style={stylesButton.text}>Bangin!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 2,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

const stylesButton = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 34,
    borderRadius: 15,
    width: 200,
    marginTop: 550,
    backgroundColor: "rgb(217, 108, 6)",
  },
  text: {
    color: "rgb(240, 237, 238)",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.25,
  },
});

export default landingPage;
