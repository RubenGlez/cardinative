import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BusinessTabsStackParamsList } from './types'
import { TabBar } from '@/components'
import { BUSINESS_HOME_SCREEN } from './constants'
import { BusinessHome } from '@/screens'

const { Navigator, Screen } =
  createBottomTabNavigator<BusinessTabsStackParamsList>()

export function BusinessTabsStack() {
  return (
    <Navigator
      initialRouteName={BUSINESS_HOME_SCREEN}
      tabBar={props => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Screen
        name={BUSINESS_HOME_SCREEN}
        component={BusinessHome}
        options={{ title: 'Home' }}
      />
    </Navigator>
  )
}
