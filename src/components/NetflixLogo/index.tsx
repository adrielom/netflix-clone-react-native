import { SvgUri } from 'react-native-svg';
import { View, Text } from 'react-native'
import React from 'react'

const NETFLIX_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'

type Props = {
    height?: number,
    width?: number,
    zIndex?: number
}

export default function NetflixLogo({height, width, zIndex}: Props) {
  return (
    <SvgUri 
        style={{zIndex: zIndex ? zIndex : 3}} 
        height={height ? height : 45} 
        width={width ? width : '45%'} 
        uri={NETFLIX_LOGO}
    />
  )
}