import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamsList } from './types'
import { AuthStack } from './AuthStack'
import { MainStack } from './MainStack'
import { AUTH_STACK, BUSINESS_STACK, MAIN_STACK } from './constants'
import { BusinessStack } from './BusinessStack'

const { Navigator, Screen } = createStackNavigator<RootStackParamsList>()

export function RootStack() {
  return (
    <Navigator
      initialRouteName={AUTH_STACK}
      screenOptions={{ headerShown: false }}>
      <Screen name={AUTH_STACK} component={AuthStack} />
      <Screen name={MAIN_STACK} component={MainStack} />
      <Screen name={BUSINESS_STACK} component={BusinessStack} />
    </Navigator>
  )
}
