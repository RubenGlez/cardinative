import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoleStackParamsList } from './types'
import { BasicStack } from './BasicStack'
import { BUSINESS_STACK, BASIC_STACK } from './constants'
import { BusinessStack } from './BusinessStack'
import { UserRole } from '@/entities'
import { Loading } from '@/components'
import useAuthSession from '@/hooks/auth/useAuthSession'

const { Navigator, Screen } = createStackNavigator<RoleStackParamsList>()

export function RoleStack() {
  const [authSession] = useAuthSession()
  const currentUserRole = authSession?.userRole

  if (!currentUserRole) return <Loading />

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {currentUserRole === UserRole.Basic ? (
        <Screen name={BASIC_STACK} component={BasicStack} />
      ) : (
        <Screen name={BUSINESS_STACK} component={BusinessStack} />
      )}
    </Navigator>
  )
}
