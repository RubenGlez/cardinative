import useGetCompanies from '../company/useGetCompanies'
import useGetPreferences from '../preferences/useGetPreferences'
import useUpdatePreferences from '../preferences/useUpdatePrefences'

export default function useBusinessHeader() {
  const { data: preferences } = useGetPreferences()
  const { mutate } = useUpdatePreferences({})
  const { data: companies = [], isLoading: isLoadingCompanies } =
    useGetCompanies()

  const companyOptions = companies?.map(comp => ({
    label: comp.name,
    value: comp.id ?? ''
  }))
  const handleSelectCompany = (companySelected: string) => {
    if (!preferences?.id) return
    mutate({
      ...preferences,
      companySelected
    })
  }

  return {
    companyOptions,
    companySelected: preferences?.companySelected ?? '',
    handleSelectCompany,
    isLoading: isLoadingCompanies
  }
}
