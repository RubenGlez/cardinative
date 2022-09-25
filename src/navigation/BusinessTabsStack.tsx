import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { BusinessTabsStackParamsList } from './types'
import { TabBar } from '@/components'
import { BusinessHeader } from '@/containers'
import {
  BUSINESS_CARDS_SCREEN,
  BUSINESS_COMPANIES_SCREEN,
  BUSINESS_HOME_SCREEN,
  BUSINESS_PROMOTIONS_SCREEN
} from './constants'
import { Cards, BusinessHome, Companies, Promotions } from '@/screens'

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
        options={{ title: 'Home' }}
      />
      <Screen
        name={BUSINESS_COMPANIES_SCREEN}
        component={Companies}
        options={{ title: 'Companies' }}
      />
      <Screen
        name={BUSINESS_CARDS_SCREEN}
        component={Cards}
        options={{ title: 'Cards' }}
      />
      <Screen
        name={BUSINESS_PROMOTIONS_SCREEN}
        component={Promotions}
        options={{ title: 'Promotions' }}
      />
    </Navigator>
  )
}
