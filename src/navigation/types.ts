import { Card, Promotion } from '@/entities'
import { Company } from '@/entities/Company'
import { NavigatorScreenParams } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  AUTH_STACK,
  BASIC_HOME_SCREEN,
  BASIC_SETTINGS_SCREEN,
  BASIC_STACK,
  BASIC_TABS_STACK,
  BASIC_WALLET_SCREEN,
  BUSINESS_CARDS_SCREEN,
  BUSINESS_COMPANIES_SCREEN,
  BUSINESS_CREATE_CARD_SCREEN,
  BUSINESS_CREATE_COMPANY_SCREEN,
  BUSINESS_CREATE_PROMOTION_SCREEN,
  BUSINESS_CREATE_SUBSCRIPTION_SCREEN,
  BUSINESS_EDIT_CARD_SCREEN,
  BUSINESS_EDIT_COMPANY_SCREEN,
  BUSINESS_EDIT_PROMOTION_SCREEN,
  BUSINESS_HOME_SCREEN,
  BUSINESS_PREFERENCES_SCREEN,
  BUSINESS_PROFILE_SCREEN,
  BUSINESS_PROMOTIONS_SCREEN,
  BUSINESS_SETTINGS_SCREEN,
  BUSINESS_STACK,
  BUSINESS_TABS_STACK,
  ROLE_STACK,
  SIGNIN_SCREEN,
  SIGNUP_SCREEN
} from './constants'

export type RootStackParamsList = {
  [AUTH_STACK]: NavigatorScreenParams<AuthStackParamsList>
  [ROLE_STACK]: NavigatorScreenParams<RoleStackParamsList>
}

export type AuthStackParamsList = {
  [SIGNUP_SCREEN]: undefined
  [SIGNIN_SCREEN]: undefined
}

export type RoleStackParamsList = {
  [BASIC_STACK]: NavigatorScreenParams<BasicStackParamsList>
  [BUSINESS_STACK]: NavigatorScreenParams<BusinessStackParamsList>
}

export type BasicStackParamsList = {
  [BASIC_TABS_STACK]: NavigatorScreenParams<BasicTabsStackParamsList>
}

export type BusinessStackParamsList = {
  [BUSINESS_TABS_STACK]: NavigatorScreenParams<BusinessTabsStackParamsList>

  [BUSINESS_COMPANIES_SCREEN]: undefined
  [BUSINESS_CREATE_COMPANY_SCREEN]: undefined
  [BUSINESS_EDIT_COMPANY_SCREEN]: {
    companyIdToEdit: Company['id']
  }

  [BUSINESS_CARDS_SCREEN]: undefined
  [BUSINESS_CREATE_CARD_SCREEN]: undefined
  [BUSINESS_EDIT_CARD_SCREEN]: {
    cardIdToEdit: Card['id']
  }

  [BUSINESS_PROMOTIONS_SCREEN]: undefined
  [BUSINESS_CREATE_PROMOTION_SCREEN]: undefined
  [BUSINESS_EDIT_PROMOTION_SCREEN]: {
    promotionIdToEdit: Promotion['id']
  }

  [BUSINESS_SETTINGS_SCREEN]: undefined

  [BUSINESS_PROFILE_SCREEN]: undefined
  [BUSINESS_PREFERENCES_SCREEN]: undefined
}

export type BasicTabsStackParamsList = {
  [BASIC_HOME_SCREEN]: undefined
  [BASIC_WALLET_SCREEN]: undefined
  [BASIC_SETTINGS_SCREEN]: undefined
}

export type BusinessTabsStackParamsList = {
  [BUSINESS_HOME_SCREEN]: undefined
  [BUSINESS_CREATE_SUBSCRIPTION_SCREEN]: undefined
  [BUSINESS_PROMOTIONS_SCREEN]: undefined
}

export type RootNavigation = StackNavigationProp<RootStackParamsList>
