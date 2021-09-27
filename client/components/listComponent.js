import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";

export default function ListComponent({ list }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("SingleSpotScreen", {
          singleList: { list },
        })
      }
    >
      <View
        style={{
          backgroundColor: "rgb(55, 53, 57)",
          color: "rgb(240, 237, 238)",
          height: 400,
          width: 325,
          borderRadius: 20,
          marginBottom: 40,
          alignItems: "left",
        }}
        key={list._id}
      >
        <View style={styles.image}>
          <Image style={styles.imageMain} source={{ uri: list.image }} />
        </View>
        <Text style={styles.text}>{list.title}</Text>
        <Text style={styles.description}>{list.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "rgb(217, 108, 6)",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },
  description: {
    color: "rgb(240, 237, 238)",
    fontSize: 15,
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },
  image: {
    paddingLeft: 25,
    paddingTop: 15,
  },
  imageMain: {
    width: 275,
    height: 275,
    borderRadius: 15,
  },
});
