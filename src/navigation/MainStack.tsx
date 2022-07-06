import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainStackParamsList } from './types'
import { HomeScreen, SettingsScreen, WalletScreen } from '@/screens'
import { TabBar } from '@/components'

const { Navigator, Screen } = createBottomTabNavigator<MainStackParamsList>()

export function MainStack() {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      tabBar={props => <TabBar {...props} />}>
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false, title: 'Home' }}
      />
      <Screen
        name="WalletScreen"
        component={WalletScreen}
        options={{ headerShown: false, title: 'Wallet' }}
      />
      <Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false, title: 'Settings' }}
      />
    </Navigator>
  )
}
