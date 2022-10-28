import React from 'react'
import { Button, ScreenLayout, Spacer, Typography } from '@/components'
import useSignOut from '@/hooks/auth/useSignOut'
import useGetCurrentUser from '@/hooks/user/useGetCurrentUser'
import { SettingsContent, SettingsHeader } from './styles'
import SettingsItem from './SettingsItem'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import {
  BUSINESS_CARDS_SCREEN,
  BUSINESS_COMPANIES_SCREEN,
  BUSINESS_STACK,
  ROLE_STACK
} from '@/navigation/constants'

export default function Settings() {
  const { navigate } = useNavigation<RootNavigation>()
  const { handleSignOut } = useSignOut()
  const user = useGetCurrentUser()

  return (
    <ScreenLayout title={'Configuración'}>
      <SettingsHeader>
        <Typography size="xl">{user?.username}</Typography>
        <Spacer vertical="s" />
        <Typography size="m" color="secondary">
          {user?.email}
        </Typography>
      </SettingsHeader>
      <SettingsContent>
        <SettingsItem
          onPress={() => {}}
          label={'Perfil'}
          icon={'person-outline'}
        />
        <SettingsItem
          onPress={() => {
            navigate(ROLE_STACK, {
              screen: BUSINESS_STACK,
              params: {
                screen: BUSINESS_COMPANIES_SCREEN
              }
            })
          }}
          label={'Empresas'}
          icon={'business-outline'}
        />
        <SettingsItem
          onPress={() => {
            navigate(ROLE_STACK, {
              screen: BUSINESS_STACK,
              params: {
                screen: BUSINESS_CARDS_SCREEN
              }
            })
          }}
          label={'Tarjetas'}
          icon={'card-outline'}
        />
        <SettingsItem
          onPress={() => {}}
          label={'Preferencias'}
          icon={'construct-outline'}
        />
        <Spacer vertical="xl" />
        <Button text="LOGOUT" type="danger" onPress={handleSignOut} />
      </SettingsContent>
    </ScreenLayout>
  )
}
