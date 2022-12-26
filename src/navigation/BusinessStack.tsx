import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { BusinessStackParamsList } from './types'
import {
  BUSINESS_TABS_STACK,
  BUSINESS_CREATE_CARD_SCREEN,
  BUSINESS_CREATE_COMPANY_SCREEN,
  BUSINESS_CREATE_PROMOTION_SCREEN,
  BUSINESS_EDIT_CARD_SCREEN,
  BUSINESS_EDIT_COMPANY_SCREEN,
  BUSINESS_EDIT_PROMOTION_SCREEN,
  BUSINESS_COMPANIES_SCREEN,
  BUSINESS_CARDS_SCREEN,
  BUSINESS_PROMOTIONS_SCREEN,
  BUSINESS_SETTINGS_SCREEN,
  BUSINESS_PROFILE_SCREEN,
  BUSINESS_PREFERENCES_SCREEN
} from './constants'
import {
  BusinessPreferences,
  BusinessProfile,
  BusinessSettings,
  Cards,
  Companies,
  CreateCard,
  CreateCompany,
  CreatePromotion,
  EditCard,
  EditCompany,
  EditPromotion,
  Promotions
} from '@/screens'
import { BusinessTabsStack } from './BusinessTabsStack'

const { Navigator, Screen } = createStackNavigator<BusinessStackParamsList>()

export function BusinessStack() {
  return (
    <Navigator
      initialRouteName={BUSINESS_TABS_STACK}
      screenOptions={{ headerShown: false }}>
      <Screen name={BUSINESS_TABS_STACK} component={BusinessTabsStack} />

      <Screen name={BUSINESS_COMPANIES_SCREEN} component={Companies} />
      <Screen name={BUSINESS_CREATE_COMPANY_SCREEN} component={CreateCompany} />
      <Screen name={BUSINESS_EDIT_COMPANY_SCREEN} component={EditCompany} />

      <Screen name={BUSINESS_CARDS_SCREEN} component={Cards} />
      <Screen name={BUSINESS_CREATE_CARD_SCREEN} component={CreateCard} />
      <Screen name={BUSINESS_EDIT_CARD_SCREEN} component={EditCard} />

      <Screen name={BUSINESS_PROMOTIONS_SCREEN} component={Promotions} />
      <Screen
        name={BUSINESS_CREATE_PROMOTION_SCREEN}
        component={CreatePromotion}
      />
      <Screen name={BUSINESS_EDIT_PROMOTION_SCREEN} component={EditPromotion} />

      <Screen name={BUSINESS_SETTINGS_SCREEN} component={BusinessSettings} />

      <Screen name={BUSINESS_PROFILE_SCREEN} component={BusinessProfile} />

      <Screen
        name={BUSINESS_PREFERENCES_SCREEN}
        component={BusinessPreferences}
      />
    </Navigator>
  )
}
