import { View, Text, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { StandartButton } from './style';
import themes from '../../themes';
import { RectButtonProps } from 'react-native-gesture-handler';

export interface DefaultButtonProps extends RectButtonProps {
    accent?: boolean,
    title: string,
    textStyle?: object
}

export default function DefaultButton({accent, title, textStyle, ...rest}: DefaultButtonProps) {
  return (
    <StandartButton
      accent={accent !== undefined ? accent : false}
      title={title}
      {...rest}
    >
      <Text 
          style={ 
            textStyle ? 
              [{color: accent ? themes.COLORS.WHITE : themes.COLORS.BLACK}, textStyle] : {color: accent ? themes.COLORS.WHITE : themes.COLORS.BLACK}}> 
          { title } 
      </Text>
    </StandartButton>
  )
}