import { Promotion } from '@/entities'

export interface PromotionDetailsProps {
  promotion: Promotion | undefined
  handleCloseDetails: () => void
  handleDelete: (id: Promotion['id']) => void
  handleGoToEdit: (id: Promotion['id']) => void
  handleGoToRedeem: (id: Promotion['id']) => () => void
}
