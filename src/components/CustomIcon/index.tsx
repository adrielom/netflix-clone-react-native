import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function CustomIcon({children}: Props) {
  return (
    <View>
        {children}
    </View>
  )
}