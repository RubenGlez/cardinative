import React, { useEffect, useMemo } from 'react'
import { LoadingContainer, LoadingIcon } from './styles'
import { Animated, Easing } from 'react-native'

export default function Loading() {
  const spinValue = useMemo(() => new Animated.Value(0), [])
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start()
  }, [spinValue])

  return (
    <LoadingContainer>
      <LoadingIcon style={{ transform: [{ rotate: spin }] }} />
    </LoadingContainer>
  )
}
