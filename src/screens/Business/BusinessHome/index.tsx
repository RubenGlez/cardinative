import React, { useCallback, useEffect } from 'react'
import { Button, ScreenLayout, Spacer, Typography } from '@/components'
import useGetCompanies from '@/hooks/company/useGetCompanies'
import { useNavigation } from '@react-navigation/native'
import { RootNavigation } from '@/navigation/types'
import {
  BUSINESS_STACK,
  CREATE_COMPANY_SCREEN,
  EDIT_COMPANY_SCREEN
} from '@/navigation/constants'
import {
  CompaniesContainer,
  CompanyContainer,
  CompanyLeftSide,
  CompanyRightSide
} from './styles'
import { Company } from '@/entities/Company'

export default function BusinessHome() {
  const { navigate } = useNavigation<RootNavigation>()
  const { data: companies = [], isFetched } = useGetCompanies()
  const companiesLength = companies?.length
  const handleGoToEdit = useCallback(
    (id: Company['id']) => () => {
      if (!id) return
      navigate(BUSINESS_STACK, {
        screen: EDIT_COMPANY_SCREEN,
        params: {
          companyIdToEdit: id
        }
      })
    },
    [navigate]
  )
  const handleGoToCreate = useCallback(() => {
    navigate(BUSINESS_STACK, {
      screen: CREATE_COMPANY_SCREEN
    })
  }, [navigate])

  useEffect(() => {
    if (isFetched && !companiesLength) {
      handleGoToCreate()
    }
  }, [companiesLength, handleGoToCreate, isFetched])

  return (
    <ScreenLayout title={'Home'} showBackButton={false}>
      <Typography size="l">Mis empresas:</Typography>

      <CompaniesContainer>
        {companies?.map((company, index) => (
          <CompanyContainer key={index}>
            <CompanyLeftSide>
              <Typography size="m">{company.name}</Typography>
              <Typography size="m">{company.description}</Typography>
            </CompanyLeftSide>
            <CompanyRightSide>
              <Button text={'Editar'} onPress={handleGoToEdit(company.id)} />
            </CompanyRightSide>
          </CompanyContainer>
        ))}
      </CompaniesContainer>

      <Spacer vertical="l" />
      <Button text="Crear empresa" onPress={handleGoToCreate} />
    </ScreenLayout>
  )
}
