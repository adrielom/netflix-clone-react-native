import { View, Text, ViewProps, Image,  ImageProps } from 'react-native'
import React from 'react'
import { ProfileIconWrapper } from './style'
import themes from '../../themes'
import PressableAnimation from '../PressableAnimation'

export type ProfileIconWrapperProps = ViewProps & {
    userName: string,
    size: number,
    source: string,
    onPress: Function
}

export const animationGrow = {
  idle_release: {
    scale: 1
  },
  pressed: {
    scale: 0.9
  }
}; 

export default function ProfileIcon({source, size, userName, onPress,  ...rest}: ProfileIconWrapperProps) {
  return (
    <ProfileIconWrapper
      { ...rest }   
    >
      <PressableAnimation onPress={onPress} animationState={animationGrow}>
        <Image source={{uri: source}} style={{height: size, width: size, marginBottom: 8, borderRadius: 4}} />
      </PressableAnimation>
      <Text style={{color: themes.COLORS.WHITE, fontSize: themes.FONTS_SIZE.s_md}}>{userName}</Text>
    </ProfileIconWrapper>
  )
}

