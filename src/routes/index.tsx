import { View, Text } from 'react-native'
import React from 'react'
import Routes from './stack.routes'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const AppRoutes = () => {
  return (
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
      </GestureHandlerRootView>
  )
}

export default AppRoutes