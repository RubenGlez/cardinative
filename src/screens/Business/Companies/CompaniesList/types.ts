import { Company, CompanyExtended } from '@/entities'

export interface CompaniesListProps {
  companies: CompanyExtended[]
  handleShowDetails: (id: Company['id']) => () => void
}
export interface CompanyItemProps {
  company: CompanyExtended
  handleShowDetails: (id: Company['id']) => () => void
}
