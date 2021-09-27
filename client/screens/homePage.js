import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
// import { BACKEND_URL } from "@env"

import SingleList from "./singleList";
import ListView from "./list";
import MapView from "./map";

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
// screenOptions={{headerMode: 'none'}}
const ListStackScreen = () => (
  <ListStack.Navigator navigationOptions= {{ 
    headerMode: 'none',
}}>
    <ListStack.Screen name="ListView" component={ListView} />
    <ListStack.Screen name="SingleList" component={SingleList} />
  </ListStack.Navigator>
);

const homeScreen = () => {
  const [data, setData] = useState([]);

  const gettingData = async () => {
    const response = await fetch("http://192.168.1.26:3003/list");
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    gettingData();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: 'rgb(217, 108, 6)',
        tabBarStyle: {
          backgroundColor: 'rgb(18, 18, 20)',
          borderTopWidth: 0,
        },
        labelStyle: {
          fontSize: 10,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Map",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="md-map-outline"
              size={24}
              color="rgb(217, 108, 6)"
            />
          ),
        }}
        name="Map"
        children={() => <MapView data={data} />}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "List",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="skateboard"
              size={24}
              color="rgb(217, 108, 6)"
            />
          ),
        }}
        name="List"
        children={() => <ListStackScreen data={data} />}
      />
    </Tab.Navigator>
  );
};
export default homeScreen;
