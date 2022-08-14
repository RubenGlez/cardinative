import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { BusinessStackParamsList } from './types'
import { BUSINESS_TABS_STACK, CREATE_COMPANY_SCREEN } from './constants'
import { CreateCompany } from '@/screens'
import { BusinessTabsStack } from './BusinessTabsStack'

const { Navigator, Screen } = createStackNavigator<BusinessStackParamsList>()

export function BusinessStack() {
  return (
    <Navigator
      initialRouteName={BUSINESS_TABS_STACK}
      screenOptions={{ headerShown: false }}>
      <Screen name={BUSINESS_TABS_STACK} component={BusinessTabsStack} />

      <Screen name={CREATE_COMPANY_SCREEN} component={CreateCompany} />
    </Navigator>
  )
}
