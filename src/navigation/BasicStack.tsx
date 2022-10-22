import React from 'react'
import { BasicStackParamsList } from './types'
import { BASIC_TABS_STACK } from './constants'
import { createStackNavigator } from '@react-navigation/stack'
import { BasicTabsStack } from './BasicTabsStack'

const { Navigator, Screen } = createStackNavigator<BasicStackParamsList>()

export function BasicStack() {
  return (
    <Navigator
      initialRouteName={BASIC_TABS_STACK}
      screenOptions={{ headerShown: false }}>
      <Screen name={BASIC_TABS_STACK} component={BasicTabsStack} />
    </Navigator>
  )
}
