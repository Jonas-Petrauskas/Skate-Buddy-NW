import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import SingleSpotScreen from "./SingleSpotScreen";
import ListScreen from "./ListScreen";
import MapComponent from "../components/MapComponent";
import CameraComponent from "../components/CameraComponent";

const Tab = createBottomTabNavigator();
const ListStack = createStackNavigator();
const ListStackScreen = () => (
  <ListStack.Navigator>
    <ListStack.Screen
      name="ListScreen"
      component={ListScreen}
      options={{
        headerShown: false,
      }}
    />
    <ListStack.Screen
      name="SingleSpotScreen"
      component={SingleSpotScreen}
      options={{
        headerShown: false,
      }}
    />
  </ListStack.Navigator>
);

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "rgb(217, 108, 6)",
        tabBarStyle: {
          backgroundColor: "rgb(18, 18, 20)",
          borderTopWidth: 0,
        },
        labelStyle: {
          fontSize: 10,
        },
      }}
    >
      <Tab.Screen
        name="Map"
        component={MapComponent}
        options={{
          headerShown: false,
          tabBarLabel: "Map",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="md-map-outline"
              size={24}
              color="rgb(217, 108, 6)"
            />
          ),
        }}
      />

      <Tab.Screen name="Camera" component={CameraComponent} />

      <Tab.Screen
        options={{
          headerShown: false,
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
        children={() => <ListStackScreen />}
      />
    </Tab.Navigator>
  );
};
export default HomeScreen;
