import { CompanySelector, Icon } from '@/components'
import useBusinessHeader from '@/hooks/components/useBusinessHeader'
import {
  BUSINESS_SETTINGS_SCREEN,
  BUSINESS_STACK,
  ROLE_STACK
} from '@/navigation/constants'
import React from 'react'
import { HeaderContainer } from './styles'
import { HeaderProps } from './types'

export default function BusinessHeader({ navigation }: HeaderProps) {
  const { companyOptions, companySelected, handleSelectCompany } =
    useBusinessHeader()
  const handleGoToSettings = () => {
    navigation.navigate(ROLE_STACK, {
      screen: BUSINESS_STACK,
      params: {
        screen: BUSINESS_SETTINGS_SCREEN
      }
    })
  }

  return (
    <HeaderContainer>
      <CompanySelector
        options={companyOptions}
        selected={companySelected}
        placeholder={'Selecciona el negocio'}
        onSelect={handleSelectCompany}
      />

      <Icon name={'settings-outline'} onPress={handleGoToSettings} />
    </HeaderContainer>
  )
}
