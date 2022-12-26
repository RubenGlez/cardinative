import React from 'react'
import { Button, ScreenLayout, Spacer } from '@/components'
import useSignOut from '@/hooks/auth/useSignOut'
import SettingsItem from './SettingsItem'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import {
  BUSINESS_CARDS_SCREEN,
  BUSINESS_COMPANIES_SCREEN,
  BUSINESS_PREFERENCES_SCREEN,
  BUSINESS_PROFILE_SCREEN,
  BUSINESS_STACK,
  ROLE_STACK
} from '@/navigation/constants'

export default function Settings() {
  const { navigate } = useNavigation<RootNavigation>()
  const { handleSignOut } = useSignOut()

  return (
    <ScreenLayout title={'Configuración'}>
      <SettingsItem
        onPress={() => {
          navigate(ROLE_STACK, {
            screen: BUSINESS_STACK,
            params: {
              screen: BUSINESS_PROFILE_SCREEN
            }
          })
        }}
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
        onPress={() => {
          navigate(ROLE_STACK, {
            screen: BUSINESS_STACK,
            params: {
              screen: BUSINESS_PREFERENCES_SCREEN
            }
          })
        }}
        label={'Preferencias'}
        icon={'construct-outline'}
      />
      <Spacer vertical="xl" />
      <Button text="LOGOUT" type="danger" onPress={handleSignOut} />
    </ScreenLayout>
  )
}
