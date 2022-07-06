import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamsList } from './types'
import { AuthStack } from './AuthStack'
import { MainStack } from './MainStack'

const { Navigator, Screen } = createStackNavigator<RootStackParamsList>()

export function RootStack() {
  return (
    <Navigator initialRouteName="AuthStack">
      <Screen
        name="AuthStack"
        component={AuthStack}
        options={{ headerShown: false }}
      />
      <Screen
        name="MainStack"
        component={MainStack}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}
