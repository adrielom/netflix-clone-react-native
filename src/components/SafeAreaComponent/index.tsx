import { SafeAreaView, Platform } from 'react-native'
import React from 'react'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? getStatusBarHeight() : 28;

type Props = {
    children: React.ReactNode
}

export default function SafeAreaComponent({children}: Props) {
  return (
    <SafeAreaView style={[{flex: 1}, {paddingTop: STATUSBAR_HEIGHT}]}>
        {children}
    </SafeAreaView>
  )
}