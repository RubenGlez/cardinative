import { PromotionMetrics } from '@/entities'
import useGetCurrentCompany from '../company/useGetCurrentCompany'
import useGetMetrics from './useGetPromotions'

const emptyArray: PromotionMetrics[] = []

export default function useMetrics() {
  const currentCompany = useGetCurrentCompany()
  const { isLoading, data } = useGetMetrics(currentCompany?.id)

  const unexpiredMostCompletedPromotions =
    data?.unexpired?.mostCompletedPromotions || emptyArray
  const unexpiredMostFollowedPromotions =
    data?.unexpired?.mostFollowedPromotions || emptyArray
  const expiredMostCompletedPromotions =
    data?.expired?.mostCompletedPromotions || emptyArray
  const expiredMostFollowedPromotions =
    data?.expired?.mostFollowedPromotions || emptyArray

  return {
    isLoading,
    unexpiredMostCompletedPromotions,
    unexpiredMostFollowedPromotions,
    expiredMostCompletedPromotions,
    expiredMostFollowedPromotions
  }
}
