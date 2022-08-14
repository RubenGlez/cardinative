import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthStackParamsList } from './types'
import { SIGNIN_SCREEN, SIGNUP_SCREEN } from './constants'
import { Signin, Signup } from '@/screens'

const { Navigator, Screen } = createStackNavigator<AuthStackParamsList>()

export function AuthStack() {
  return (
    <Navigator
      initialRouteName={SIGNIN_SCREEN}
      screenOptions={{ headerShown: false }}>
      <Screen name={SIGNUP_SCREEN} component={Signup} />
      <Screen name={SIGNIN_SCREEN} component={Signin} />
    </Navigator>
  )
}
