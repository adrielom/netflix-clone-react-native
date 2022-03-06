import { View, Text, ViewProps, Image,  ImageProps } from 'react-native'
import React from 'react'
import { ProfileIconWrapper } from './style'
import themes from '../../themes'

export type ProfileIconWrapperProps = ViewProps & {
    userName: string,
    size: number,
    source: string
}

export default function ProfileIcon({source, size, userName, ...rest}: ProfileIconWrapperProps) {
  return (
    <ProfileIconWrapper
       { ...rest }   
    >
      <Image source={{uri: source}} style={{height: size, width: size, marginBottom: 8}} />
      <Text style={{color: themes.COLORS.WHITE, fontSize: themes.FONTS_SIZE.s_md}}>{userName}</Text>

    </ProfileIconWrapper>
  )
}