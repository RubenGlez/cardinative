import useAuthSession from '../auth/useAuthSession'
import useGetCompanies from '../company/useGetCompanies'
import useGetPreferences from '../preferences/useGetPreferences'
import useUpdatePreferences from '../preferences/useUpdatePrefences'

export default function useBusinessHeader() {
  const [{ userId }] = useAuthSession()
  const { data: preferences } = useGetPreferences(userId)
  const { mutate } = useUpdatePreferences({})
  const { data: companies = [], isLoading: isLoadingCompanies } =
    useGetCompanies()

  const companyOptions = companies?.map(comp => ({
    label: comp.name,
    value: comp.id ?? ''
  }))
  const handleSelectCompany = (companySelected: string) => {
    mutate({
      ...preferences,
      user: preferences?.user ?? userId,
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
