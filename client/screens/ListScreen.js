import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import SearchComponent from "../components/SeachComponent";

export default function ListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SearchComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgb(18, 18, 20)",
  },
});
