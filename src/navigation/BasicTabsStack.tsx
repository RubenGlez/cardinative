import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BasicTabsStackParamsList } from './types'
import { TabBar } from '@/components'
import { HOME_SCREEN, SETTINGS_SCREEN, WALLET_SCREEN } from './constants'
import { Home, Settings, Wallet } from '@/screens'

const { Navigator, Screen } =
  createBottomTabNavigator<BasicTabsStackParamsList>()

export function BasicTabsStack() {
  return (
    <Navigator
      initialRouteName={HOME_SCREEN}
      tabBar={props => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Screen name={HOME_SCREEN} component={Home} options={{ title: 'Home' }} />
      <Screen
        name={WALLET_SCREEN}
        component={Wallet}
        options={{ title: 'Wallet' }}
      />
      <Screen
        name={SETTINGS_SCREEN}
        component={Settings}
        options={{ title: 'Settings' }}
      />
    </Navigator>
  )
}
