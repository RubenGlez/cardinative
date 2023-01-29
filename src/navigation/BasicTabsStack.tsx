import React from 'react'
import {
  BottomTabBarProps,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'

import { BasicTabsStackParamsList } from './types'
import { TabBar } from '@/components'
import { Home, Settings, Wallet } from '@/screens'
import {
  BASIC_HOME_SCREEN,
  BASIC_SETTINGS_SCREEN,
  BASIC_WALLET_SCREEN
} from './constants'

const { Navigator, Screen } =
  createBottomTabNavigator<BasicTabsStackParamsList>()

const tabBar = (props: BottomTabBarProps) => <TabBar {...props} />

export function BasicTabsStack() {
  return (
    <Navigator
      initialRouteName={BASIC_HOME_SCREEN}
      tabBar={tabBar}
      screenOptions={{ headerShown: false }}>
      <Screen
        name={BASIC_HOME_SCREEN}
        component={Home}
        options={{ title: 'Home' }}
      />
      <Screen
        name={BASIC_WALLET_SCREEN}
        component={Wallet}
        options={{ title: 'Wallet' }}
      />
      <Screen
        name={BASIC_SETTINGS_SCREEN}
        component={Settings}
        options={{ title: 'Settings' }}
      />
    </Navigator>
  )
}
