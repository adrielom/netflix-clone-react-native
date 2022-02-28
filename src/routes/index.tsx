import { View, Text } from 'react-native'
import React from 'react'
import Routes from './stack.routes'
import { NavigationContainer } from '@react-navigation/native'

const AppRoutes = () => {
  return (
    <NavigationContainer>
        <Routes/>
    </NavigationContainer>
  )
}

export default AppRoutes