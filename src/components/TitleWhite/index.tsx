import { ReactNode } from 'react'
import { View, Text, TextProps } from 'react-native'

type Props = TextProps & {
    children: ReactNode,
    color?: string
}

export default function Title({ children, color, ...rest}: Props) {

  return (
    <Text style={{color}} {...rest}> {children} </Text>
  )
}