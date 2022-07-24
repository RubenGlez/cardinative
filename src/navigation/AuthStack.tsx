import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthStackParamsList } from './types'
import { SigninScreen, SignupScreen } from '@/screens'

const { Navigator, Screen } = createStackNavigator<AuthStackParamsList>()

export function AuthStack() {
  return (
    <Navigator initialRouteName="SigninScreen">
      <Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}
