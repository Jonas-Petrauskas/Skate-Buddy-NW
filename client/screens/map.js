import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { CustomMapStyle } from "../components/customMapStyle";

const Map = ({ data }) => {
  const navigation = useNavigation();
  const pinData = data.map((marker, index) => {
    return (
      <Marker
        key={marker._id}
        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
        image={require("../assets/location64.png")}
      >
        <Callout
          onPress={() => navigation.navigate("List")}
          style={styles.container}
        >
          <View>
            <Image style={styles.image} source={{ uri: marker.image }} />
            <Text style={styles.title}>{marker.title}</Text>
          </View>
        </Callout>
      </Marker>
    );
  });

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView
        customMapStyle={CustomMapStyle}
        style={StyleSheet.absoluteFillObject}
        provider="google"
        loadingEnabled
        region={{
          latitude: 41.390205,
          longitude: 2.154007,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {pinData}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 100,
    height: 100,
  },
  title: {
    alignSelf: "center",
    width: 100,
    color: "black",
  },
});

export default Map;
