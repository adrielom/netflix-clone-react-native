import { View, Text } from 'react-native'
import React from 'react'
import { WrapperView } from '../ProfileChooser/styles'
import SafeAreaComponent from '../../components/SafeAreaComponent'
import TitleWhite from '../../components/TitleWhite'

export default function Home() {
  return (
    <WrapperView>
      <SafeAreaComponent>
        <TitleWhite>hey</TitleWhite>
      </SafeAreaComponent>
    </WrapperView>
  )
}