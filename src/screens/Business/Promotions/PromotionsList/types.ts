import { Promotion } from '@/entities'

export interface PromotionsListProps {
  promotions: Promotion[]
  handleShowDetails: (id: Promotion['id']) => () => void
}
export interface PromotionItemProps {
  promotion: Promotion
  handleShowDetails: (id: Promotion['id']) => () => void
}
