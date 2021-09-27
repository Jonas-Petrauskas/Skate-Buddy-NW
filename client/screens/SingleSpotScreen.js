import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import MiniMapComponent from "../components/MiniMapComponent";

export default function SingleSpotScreen({ route }) {
  const { singleList } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
          <Image style={styles.image} source={{ uri: singleList.list.image }} />
          <Text style={styles.text}>{singleList.list.title}</Text>
          <Text style={styles.description}>
            {singleList.list.mainDescription}
          </Text>
          <Text style={styles.location}>Location</Text>
          <Text style={styles.address}>{singleList.list.location}</Text>
          <MiniMapComponent style={styles.mapImage} />
        </View>
      </ScrollView>
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "rgb(18, 18, 20)",
  },
  view: {
    backgroundColor: "rgb(55, 53, 57)",
    width: 325,
    height: "100%",
    paddingLeft: 25,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 25,
  },
  text: {
    color: "rgb(217, 108, 6)",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
  },
  description: {
    color: "rgb(240, 237, 238)",
    fontSize: 15,
    paddingTop: 20,
    paddingRight: 20,
  },
  location: {
    color: "rgb(217, 108, 6)",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
  },
  address: {
    color: "rgb(240, 237, 238)",
    fontSize: 15,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 25,
  },
  image: {
    width: 275,
    height: 275,
    borderRadius: 15,
  },
});
