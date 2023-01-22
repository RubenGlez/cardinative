import { Promotion } from './Promotion'

export interface PromotionMetrics extends Promotion {
  subsCounter: number
}

export interface Metrics {
  unexpired: {
    mostFollowedPromotions: PromotionMetrics[]
    mostCompletedPromotions: PromotionMetrics[]
  }
  expired: {
    mostFollowedPromotions: PromotionMetrics[]
    mostCompletedPromotions: PromotionMetrics[]
  }
}
