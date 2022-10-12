import { Company, CompanyExtended } from '@/entities'

export interface CompanyDetailsProps {
  company: CompanyExtended | undefined
  handleCloseDetails: () => void
  handleDelete: (id: Company['id']) => void
  handleGoToEdit: (id: Company['id']) => void
}
