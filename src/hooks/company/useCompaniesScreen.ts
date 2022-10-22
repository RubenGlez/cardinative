import { useCallback, useMemo, useState } from 'react'
import useGetCompanies from '@/hooks/company/useGetCompanies'
import { useNavigation } from '@react-navigation/native'
import { RootNavigation } from '@/navigation/types'
import {
  BUSINESS_STACK,
  CREATE_COMPANY_SCREEN,
  EDIT_COMPANY_SCREEN,
  ROLE_STACK
} from '@/navigation/constants'
import { Company, CompanyExtended } from '@/entities/Company'
import useDeleteCompany from '@/hooks/company/useDeleteCompany'
import useCardsGroupedByCompany from '@/hooks/card/useCardsGroupedByCompany'
import usePromotionsGroupedByCompany from '@/hooks/promotion/usePromotionsGroupedByCompany'
import useLiveSearch from '@/hooks/common/useLiveSearch'

export default function useCompaniesScreen() {
  const [selectedCompany, setSelectedCompany] = useState<CompanyExtended>()
  const { navigate } = useNavigation<RootNavigation>()
  const { data: companies = [] } = useGetCompanies()
  const cardsGroupedByCompanyId = useCardsGroupedByCompany()
  const promotionsGroupedByCompany = usePromotionsGroupedByCompany()
  const companiesList: CompanyExtended[] = useMemo(
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
      const company = companiesList.find(comp => comp.id === id)
      setSelectedCompany(company)
    },
    [companiesList]
  )
  const handleCloseDetails = useCallback(() => {
    setSelectedCompany(undefined)
  }, [])
  const handleGoToEdit = useCallback(
    (id: Company['id']) => {
      if (!id) return
      navigate(ROLE_STACK, {
        screen: BUSINESS_STACK,
        params: {
          screen: EDIT_COMPANY_SCREEN,
          params: {
            companyIdToEdit: id
          }
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
    navigate(ROLE_STACK, {
      screen: BUSINESS_STACK,
      params: {
        screen: CREATE_COMPANY_SCREEN
      }
    })
  }, [navigate])

  return {
    selectedCompany,
    search,
    filteredOptions,
    handleShowDetails,
    handleCloseDetails,
    handleGoToEdit,
    handleDelete,
    handleGoToCreate
  }
}
