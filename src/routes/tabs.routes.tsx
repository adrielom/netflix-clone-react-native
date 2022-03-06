import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import themes from '../themes';

import { Foundation } from '@expo/vector-icons';

const AppTabs = createBottomTabNavigator();

export default function HomeRoutes() {
  return (
    <AppTabs.Navigator
        screenOptions={{
            tabBarActiveTintColor: themes.COLORS.WHITE,
            tabBarLabelPosition: 'below-icon',
            headerShown: false,
            tabBarStyle: {
                height: 74,
                paddingBottom: 18,
                backgroundColor: themes.COLORS.GREY
            },
            tabBarIcon: ({size, color}) => (
                <Foundation name="home" size={30} color={themes.COLORS.WHITE} />
            ),  
        
        }}
    >
        <AppTabs.Screen 
            name="Home"
            component={Home}
        />
    </AppTabs.Navigator>
  )
}
