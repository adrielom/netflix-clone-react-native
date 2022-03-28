import { View, Text, ViewProps, ImageSourcePropType, Dimensions } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

import { 
    MovieCardStyle,
    MovieCardBackgroundImage,
    SeriesText,
    MovieCardFooter,
    MovieCardIconCircle,
} from './style'

type Props = ViewProps & {
    imageSource: ImageSourcePropType
}

export default function MovieCard({imageSource, ...rest}: Props) {
  return (
    <MovieCardStyle
        {...rest}
    >
        <MovieCardBackgroundImage source={imageSource}>
            <MovieCardIconCircle>
                <Feather style={{position: 'absolute', marginLeft: 8, marginTop: 5.5}} name="play" size={24} color="white" />
            </MovieCardIconCircle>
            <SeriesText></SeriesText>
        </MovieCardBackgroundImage>
        <MovieCardFooter>
            <Feather name="info" size={24} color="white" />
            <Feather name="more-vertical" size={24} color="white" />
        </MovieCardFooter>
    </MovieCardStyle>
  )
}