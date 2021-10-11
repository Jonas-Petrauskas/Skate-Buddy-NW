import React, { useState, useEffect } from "react";
import { SearchBar } from "react-native-elements";
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from "react-native";
import ListComponent from "./ListComponent";
import { StatusBar } from "expo-status-bar";
import { getData } from "../Services/ApiClient";

export default function SearchBarComponent() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const receivedData = await getData();
      if (receivedData !== undefined) setData(receivedData);
      setFilteredData(receivedData);
    }
    fetchData();
  }, []);

  const handleSearch = (text) => {
    const newData = data.filter((item) => {
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) != -1;
    });
    setFilteredData(newData);
    setSearch(text);
  };

  const dataList = filteredData.map((data) => (
    <ListComponent key={data._id} list={data} />
  ));

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.searchView}>
        <SearchBar
          round
          onChangeText={(text) => handleSearch(text)}
          placeholder="Search for ..."
          value={search}
        />
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView indicatorStyle="black" showsVerticalScrollIndicator={false}>
          <StatusBar style="inverted" />

          <View style={styles.dataView}>{dataList}</View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: 50,
  },
  dataView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: 100,
  },
  searchView: {
    padding: 10,
  },
});
