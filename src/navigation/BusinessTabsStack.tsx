import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BusinessTabsStackParamsList } from './types'
import { TabBar } from '@/components'
import { BusinessHeader } from '@/containers'
import {
  BUSINESS_HOME_SCREEN,
  BUSINESS_PROMOTIONS_SCREEN,
  BUSINESS_CREATE_SUBSCRIPTION_SCREEN
} from './constants'
import { BusinessHome, Promotions, CreateSubscription } from '@/screens'

const { Navigator, Screen } =
  createBottomTabNavigator<BusinessTabsStackParamsList>()

export function BusinessTabsStack() {
  return (
    <Navigator
      initialRouteName={BUSINESS_HOME_SCREEN}
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        header: props => <BusinessHeader {...props} />
      }}>
      <Screen
        name={BUSINESS_HOME_SCREEN}
        component={BusinessHome}
        options={{ title: 'Inicio' }}
      />
      <Screen
        name={BUSINESS_CREATE_SUBSCRIPTION_SCREEN}
        component={CreateSubscription}
        options={{ title: 'Canjear', unmountOnBlur: true }}
      />
      <Screen
        name={BUSINESS_PROMOTIONS_SCREEN}
        component={Promotions}
        options={{ title: 'Promociones' }}
      />
    </Navigator>
  )
}
