import { Card, Promotion } from '@/entities'
import { Company } from '@/entities/Company'
import { NavigatorScreenParams } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamsList = {
  AuthStack: NavigatorScreenParams<AuthStackParamsList>
  RoleStack: NavigatorScreenParams<RoleStackParamsList>
}

export type AuthStackParamsList = {
  Signup: undefined
  Signin: undefined
}

export type RoleStackParamsList = {
  BasicStack: NavigatorScreenParams<BasicStackParamsList>
  BusinessStack: NavigatorScreenParams<BusinessStackParamsList>
}

export type BasicStackParamsList = {
  BasicTabsStack: NavigatorScreenParams<BasicTabsStackParamsList>
}

export type BusinessStackParamsList = {
  BusinessTabsStack: NavigatorScreenParams<BusinessTabsStackParamsList>
  CreateCompany: undefined
  EditCompany: {
    companyIdToEdit: Company['id']
  }
  CreateCard: undefined
  EditCard: {
    cardIdToEdit: Card['id']
  }
  CreatePromotion: undefined
  EditPromotion: {
    promotionIdToEdit: Promotion['id']
  }
  CreateSubscription: {
    promotionId: Promotion['id']
  }
}

export type BasicTabsStackParamsList = {
  Home: undefined
  Wallet: undefined
  Settings: undefined
}

export type BusinessTabsStackParamsList = {
  BusinessHome: undefined
  BusinessCards: undefined
  BusinessCompanies: undefined
  BusinessPromotions: undefined
}

export type RootNavigation = StackNavigationProp<RootStackParamsList>
