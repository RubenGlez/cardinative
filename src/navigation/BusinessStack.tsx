import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { BusinessStackParamsList } from './types'
import {
  BUSINESS_TABS_STACK,
  CREATE_CARD_SCREEN,
  CREATE_COMPANY_SCREEN,
  CREATE_PROMOTION_SCREEN,
  EDIT_CARD_SCREEN,
  EDIT_COMPANY_SCREEN,
  EDIT_PROMOTION_SCREEN
} from './constants'
import {
  CreateCard,
  CreateCompany,
  CreatePromotion,
  EditCard,
  EditCompany,
  EditPromotion
} from '@/screens'
import { BusinessTabsStack } from './BusinessTabsStack'

const { Navigator, Screen } = createStackNavigator<BusinessStackParamsList>()

export function BusinessStack() {
  return (
    <Navigator
      initialRouteName={BUSINESS_TABS_STACK}
      screenOptions={{ headerShown: false }}>
      <Screen name={BUSINESS_TABS_STACK} component={BusinessTabsStack} />

      <Screen name={CREATE_COMPANY_SCREEN} component={CreateCompany} />
      <Screen name={EDIT_COMPANY_SCREEN} component={EditCompany} />

      <Screen name={CREATE_CARD_SCREEN} component={CreateCard} />
      <Screen name={EDIT_CARD_SCREEN} component={EditCard} />

      <Screen name={CREATE_PROMOTION_SCREEN} component={CreatePromotion} />
      <Screen name={EDIT_PROMOTION_SCREEN} component={EditPromotion} />
    </Navigator>
  )
}
