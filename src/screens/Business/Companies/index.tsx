import React, { useCallback, useEffect } from 'react'
import { Button, Input } from '@/components'
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
  CompaniesContent,
  CompaniesFooter,
  CompaniesHeader
} from './styles'
import { Company } from '@/entities/Company'
import useDeleteCompany from '@/hooks/company/useDeleteCompany'
import CompaniesList from './CompaniesList'
import CompanyDetails from './CompanyDetails'

export default function Companies() {
  const { navigate } = useNavigation<RootNavigation>()
  const { data: companies = [], isFetched } = useGetCompanies()
  const { mutate } = useDeleteCompany({})
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
  const handleDelete = useCallback(
    (id: Company['id']) => () => {
      if (!id) return
      mutate(id)
    },
    [mutate]
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
    <CompaniesContainer>
      <CompaniesHeader>
        <Input size="small" placeholder="Buscar empresa..." />
      </CompaniesHeader>
      <CompaniesContent>
        <CompaniesList companies={companies} handleShowDetails={() => {}} />
        <CompanyDetails company={companies[0]} />
      </CompaniesContent>
      <CompaniesFooter>
        <Button text={'+'} onPress={handleGoToCreate} />
      </CompaniesFooter>
    </CompaniesContainer>
  )
}
