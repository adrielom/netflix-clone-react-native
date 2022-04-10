import { View, Text, ViewProps } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

type Props = ViewProps & {
  text: string
}

export default function MyWatchListButton({text}: Props) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Feather name="plus" size={24} color="white" />
      <Text style={{fontSize: RFPercentage(1.5), color: 'white'}}>{text}</Text>
    </View>
  )
}