import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRoutes from './src/routes';
import {ProfileProvider} from './src/contexts/profile'

export default function App() {
  return (
    <ProfileProvider>
       <AppRoutes/>
    </ProfileProvider>
  );
}
