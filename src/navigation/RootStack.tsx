import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamsList } from './types'
import { AuthStack } from './AuthStack'
import { AUTH_STACK, ROLE_STACK } from './constants'
import useIsSignedIn from '@/hooks/auth/useIsSignedIn'
import { RoleStack } from './RoleStack'

const { Navigator, Screen } = createStackNavigator<RootStackParamsList>()

export function RootStack() {
  const isSignedIn = useIsSignedIn()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {isSignedIn ? (
        <Screen name={ROLE_STACK} component={RoleStack} />
      ) : (
        <Screen name={AUTH_STACK} component={AuthStack} />
      )}
    </Navigator>
  )
}
