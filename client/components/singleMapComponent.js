import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import { CustomMapStyle } from './customMapStyle'
// import { BACKEND_URL } from "@env"

const SingleMap = () => {
  const [data, setData] = useState([])

  const gettingData = async () => {
    const response = await fetch('http://192.168.1.26:3003/list')
    const json = await response.json()
    setData(json)
  }

  useEffect(() => {
    gettingData()
  }, [])

  const pinData = data.map((marker, index) => {
    return (
      <Marker
        key={marker._id}
        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
        image={require('../assets/location64.png')}
      >
        <Callout>
          <View>
            <Image style={styles.image} source={{ uri: marker.image }} />
            <Text style={styles.title}>{marker.title}</Text>
          </View>
        </Callout>
      </Marker>
    )
  }
  )

  return (

    <View>
      <MapView
        customMapStyle={CustomMapStyle}
        style={styles.map}
        provider='google'
        loadingEnabled
        region={{
          latitude: 41.390205,
          longitude: 2.154007,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {pinData}
      </MapView>
    </View>

  )
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60
  },
  title: {
    alignSelf: 'center',
    width: 60,
    color: 'black'
  },
  map: {
    width: 275,
    height: 275,
    borderRadius: 25
  }
})

export default SingleMap
