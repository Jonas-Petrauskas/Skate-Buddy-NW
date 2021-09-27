import React, { useState, useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import ListComponent from '../components/listComponent'
// import { BACKEND_URL } from "@env"

export default function List () {
  const [data, setData] = useState([])

  const gettingData = async () => {
    const response = await fetch('http://192.168.1.26:3003/list')
    const json = await response.json()
    setData(json)
  }

  useEffect(() => {
    gettingData()
  }, [])

  const dataList = data.map(data => <ListComponent key={data._id} list={data} />)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        indicatorStyle='black'
        showsVerticalScrollIndicator={false}

      >
        <StatusBar style='inverted' />
        <View style={styles.dataList}>{dataList}</View>
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgb(18, 18, 20)'
  }
})
