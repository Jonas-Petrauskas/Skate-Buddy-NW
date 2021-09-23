import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LandingPage from './screens/landingScreen'
import HomePage from './screens/homePage'

export default function App () {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='LandingPage' component={LandingPage} />
        <Stack.Screen name='List' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
