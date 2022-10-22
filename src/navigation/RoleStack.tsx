import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RoleStackParamsList } from './types'
import { BasicStack } from './BasicStack'
import { BUSINESS_STACK, BASIC_STACK } from './constants'
import { BusinessStack } from './BusinessStack'
import useGetCurrentUser from '@/hooks/user/useGetCurrentUser'
import { UserRole } from '@/entities'
import { Loading } from '@/components'

const { Navigator, Screen } = createStackNavigator<RoleStackParamsList>()

export function RoleStack() {
  const currentUser = useGetCurrentUser()
  const currentUserRole = currentUser?.role

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
