import { useState } from 'react'
import useGetCompanies from '../company/useGetCompanies'
import useGetCompany from '../company/useGetCompany'

export default function useBusinessHeader() {
  const [selectedCompanyId, setSelectedCompanyId] = useState('')
  const { data: companies = [], isLoading: isLoadingCompanies } =
    useGetCompanies()
  const companyOptions = companies?.map(comp => ({
    label: comp.name,
    value: comp.id ?? ''
  }))
  const { data: company } = useGetCompany(selectedCompanyId)
  const handleSelectCompany = (companyId: string) => {
    setSelectedCompanyId(companyId)
  }

  return {
    companyOptions,
    companySelected: company?.id ?? '',
    handleSelectCompany,
    isLoading: isLoadingCompanies
  }
}
