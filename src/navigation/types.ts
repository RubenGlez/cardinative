import { NavigatorScreenParams } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamsList = {
  AuthStack: NavigatorScreenParams<AuthStackParamsList>
  MainStack: NavigatorScreenParams<MainStackParamsList>
}

export type AuthStackParamsList = {
  SignupScreen: undefined
  SigninScreen: undefined
}

export type MainStackParamsList = {
  HomeScreen: undefined
  WalletScreen: undefined
  SettingsScreen: undefined
}

export type RootNavigation = StackNavigationProp<RootStackParamsList>
