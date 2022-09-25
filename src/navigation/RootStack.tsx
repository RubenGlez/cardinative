import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamsList } from './types'
import { AuthStack } from './AuthStack'
import { MainStack } from './MainStack'
import { AUTH_STACK, BUSINESS_STACK, MAIN_STACK } from './constants'
import { BusinessStack } from './BusinessStack'
import useIsSignedIn from '@/hooks/auth/useIsSignedIn'
import useGetCurrentUser from '@/hooks/user/useGetCurrentUser'
import { UserRole } from '@/entities'
import { Loading } from '@/components'

const { Navigator, Screen } = createStackNavigator<RootStackParamsList>()

export function RootStack() {
  const isSignedIn = useIsSignedIn()
  const currentUser = useGetCurrentUser()
  const currentUserRole = currentUser?.role

  if (isSignedIn && !currentUserRole) return <Loading />

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {isSignedIn ? (
        <>
          {currentUserRole === UserRole.Basic ? (
            <Screen name={MAIN_STACK} component={MainStack} />
          ) : (
            <Screen name={BUSINESS_STACK} component={BusinessStack} />
          )}
        </>
      ) : (
        <Screen name={AUTH_STACK} component={AuthStack} />
      )}
    </Navigator>
  )
}
