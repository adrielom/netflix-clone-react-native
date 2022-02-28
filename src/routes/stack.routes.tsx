import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
            name="Login" 
            component={Login} 
            options={
              {headerShown: false}
            }
        />
    </Stack.Navigator>
  )
}

export default Routes;