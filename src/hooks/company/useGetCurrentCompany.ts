import useGetPreferences from '../preferences/useGetPreferences'
import useGetCompany from './useGetCompany'

export default function useGetCurrentCompany() {
  const { data: preferences } = useGetPreferences()
  const { data: currentCompany } = useGetCompany(preferences?.companySelected)
  return currentCompany
}
