import { CompanySelector, Loading } from '@/components'
import useBusinessHeader from '@/hooks/components/useBusinessHeader'
import React from 'react'
import { HeaderContainer } from './styles'
// import { HeaderProps } from './types'

export default function BusinessHeader() {
  const { companyOptions, companySelected, handleSelectCompany, isLoading } =
    useBusinessHeader()

  return (
    <HeaderContainer>
      {isLoading && <Loading />}
      <CompanySelector
        options={companyOptions}
        selected={companySelected}
        placeholder={'Selecciona el negocio'}
        onSelect={handleSelectCompany}
      />
    </HeaderContainer>
  )
}
