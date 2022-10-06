import React, { useCallback, useMemo, useState } from 'react'
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
import useCardsGroupedByCompany from '@/hooks/card/useCardsGroupedByCompany'
import usePromotionsGroupedByCompany from '@/hooks/promotion/usePromotionsGroupedByCompany'
import useLiveSearch from '@/hooks/common/useLiveSearch'

export default function Companies() {
  const [selectedCompany, setSelectedCompany] = useState<Company>()
  const { navigate } = useNavigation<RootNavigation>()
  const { data: companies = [] } = useGetCompanies()
  const cardsGroupedByCompanyId = useCardsGroupedByCompany()
  const promotionsGroupedByCompany = usePromotionsGroupedByCompany()
  const companiesList = useMemo(
    () =>
      companies.map(comp => ({
        ...comp,
        cards: cardsGroupedByCompanyId[comp.id] ?? [],
        promotions: promotionsGroupedByCompany[comp.id] ?? []
      })),
    [cardsGroupedByCompanyId, companies, promotionsGroupedByCompany]
  )
  const { search, filteredOptions } = useLiveSearch({
    options: companiesList,
    searchParams: ['name']
  })
  const { mutate } = useDeleteCompany({})
  const handleShowDetails = useCallback(
    (id: Company['id']) => () => {
      const company = companies.find(comp => comp.id === id)
      setSelectedCompany(company)
    },
    [companies]
  )
  const handleCloseDetails = useCallback(() => {
    setSelectedCompany(undefined)
  }, [])
  const handleGoToEdit = useCallback(
    (id: Company['id']) => {
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
    (id: Company['id']) => {
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

  return (
    <CompaniesContainer>
      <CompaniesHeader>
        <Input placeholder="Buscar empresa..." onChangeText={search} />
      </CompaniesHeader>
      <CompaniesContent>
        <CompaniesList
          companies={filteredOptions}
          handleShowDetails={handleShowDetails}
        />
        <CompanyDetails
          company={selectedCompany}
          handleCloseDetails={handleCloseDetails}
          handleGoToEdit={handleGoToEdit}
          handleDelete={handleDelete}
        />
      </CompaniesContent>
      <CompaniesFooter>
        <Button text={'+'} onPress={handleGoToCreate} />
      </CompaniesFooter>
    </CompaniesContainer>
  )
}
