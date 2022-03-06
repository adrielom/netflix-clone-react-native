import { ReactNode } from 'react'
import { View, Text, TextProps } from 'react-native'

type Props = TextProps & {
    children: ReactNode
}

export default function TitleWhite({ children, ...rest}: Props) {
  return (
    <Text style={{color: 'white'}} {...rest}> {children} </Text>
  )
}