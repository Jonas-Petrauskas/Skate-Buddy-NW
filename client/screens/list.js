import React, { useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import ListComponent from "../components/listComponent";
import { getData } from "../Services/ApiClient";

export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const receivedData = await getData();
      if (receivedData !== undefined) setData(receivedData);
    }
    fetchData();
  }, []);

  const dataList = data.map((data) => (
    <ListComponent key={data._id} list={data} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView indicatorStyle="black" showsVerticalScrollIndicator={false}>
        <StatusBar style="inverted" />
        <View style={styles.dataList}>{dataList}</View>
      </ScrollView>
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
});
