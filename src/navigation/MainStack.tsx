import React from 'react'
import { MainStackParamsList } from './types'
import { MAIN_TABS_STACK } from './constants'
import { createStackNavigator } from '@react-navigation/stack'
import { MainTabsStack } from './MainTabsStack'

const { Navigator, Screen } = createStackNavigator<MainStackParamsList>()

export function MainStack() {
  return (
    <Navigator
      initialRouteName={MAIN_TABS_STACK}
      screenOptions={{ headerShown: false }}>
      <Screen name={MAIN_TABS_STACK} component={MainTabsStack} />
    </Navigator>
  )
}
