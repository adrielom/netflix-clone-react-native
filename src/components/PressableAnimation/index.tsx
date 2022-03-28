import { Pressable } from 'react-native'
import React, {  ReactNode } from 'react'
import { MotiProps, MotiView, useAnimationState } from 'moti'
import { Easing } from 'react-native-reanimated'

type Props = MotiProps & {
    children: ReactNode,
    animationState: any,
    onPress: Function
}

export default function PressableAnimation({animationState, onPress, children}: Props) {

  const pressableAnimationState = useAnimationState(animationState)

  const handlePressedButton = (state: 'idle_release' | 'pressed') => {
      pressableAnimationState.transitionTo(state)
  }

  return (
    <Pressable
        onPressIn={() => handlePressedButton('pressed')}
        onPressOut={() => {handlePressedButton('idle_release'); onPress()}}
    >
        <MotiView
            state={pressableAnimationState}
            transition={{
              type: 'timing',
              duration: 50,
              easing: Easing.ease
            }}
        >
        {children}
        </MotiView>
    </Pressable>
  )
}