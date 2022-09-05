import { Company } from '@/entities/Company'
import { NavigatorScreenParams } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamsList = {
  AuthStack: NavigatorScreenParams<AuthStackParamsList>
  MainStack: NavigatorScreenParams<MainStackParamsList>
  BusinessStack: NavigatorScreenParams<BusinessStackParamsList>
}

export type AuthStackParamsList = {
  Signup: undefined
  Signin: undefined
}

export type MainStackParamsList = {
  MainTabsStack: NavigatorScreenParams<MainTabsStackParamsList>
}

export type BusinessStackParamsList = {
  BusinessTabsStack: NavigatorScreenParams<BusinessTabsStackParamsList>
  CreateCompany: undefined
  EditCompany: {
    companyIdToEdit: Company['id']
  }
  CreateCard: undefined
}

export type MainTabsStackParamsList = {
  Home: undefined
  Wallet: undefined
  Settings: undefined
}

export type BusinessTabsStackParamsList = {
  BusinessHome: undefined
  BusinessCards: undefined
}

export type RootNavigation = StackNavigationProp<RootStackParamsList>
