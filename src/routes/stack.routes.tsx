import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login';
import ProfileChooser from '../screens/ProfileChooser';
import HomeRoutes from './tabs.routes';

const Stack = createNativeStackNavigator();

export type RoutesProps = {
	Login: undefined;
	ProfileChooser: undefined;
	HomeRoutes: undefined;
};

function Routes() {
	return (
		<Stack.Navigator initialRouteName='Login'>
			<Stack.Screen
				name={'Login'}
				component={Login}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'ProfileChooser'}
				component={ProfileChooser}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'HomeRoutes'}
				component={HomeRoutes}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

export default Routes;
