import React, { useCallback, useEffect } from 'react'
import { Button, ScreenLayout, Spacer, Typography } from '@/components'
import useGetPromotions from '@/hooks/promotion/useGetPromotions'
import { useNavigation } from '@react-navigation/native'
import { RootNavigation } from '@/navigation/types'
import {
  BUSINESS_STACK,
  CREATE_PROMOTION_SCREEN,
  EDIT_PROMOTION_SCREEN
} from '@/navigation/constants'
import {
  PromotionsContainer,
  PromotionContainer,
  PromotionLeftSide,
  PromotionRightSide
} from './styles'
import { Promotion } from '@/entities/Promotion'
import useDeletePromotion from '@/hooks/promotion/useDeletePromotion'

export default function Promotions() {
  const { navigate } = useNavigation<RootNavigation>()
  const { data: promotions = [], isFetched } = useGetPromotions()
  const { mutate } = useDeletePromotion({})
  const promotionsLength = promotions?.length
  const handleGoToEdit = useCallback(
    (id: Promotion['id']) => () => {
      if (!id) return
      navigate(BUSINESS_STACK, {
        screen: EDIT_PROMOTION_SCREEN,
        params: {
          promotionIdToEdit: id
        }
      })
    },
    [navigate]
  )
  const handleDelete = useCallback(
    (id: Promotion['id']) => () => {
      if (!id) return
      mutate(id)
    },
    [mutate]
  )
  const handleGoToCreate = useCallback(() => {
    navigate(BUSINESS_STACK, {
      screen: CREATE_PROMOTION_SCREEN
    })
  }, [navigate])

  useEffect(() => {
    if (isFetched && !promotionsLength) {
      handleGoToCreate()
    }
  }, [promotionsLength, handleGoToCreate, isFetched])

  return (
    <ScreenLayout title={'Promotions'} showBackButton={false}>
      <PromotionsContainer>
        {promotions?.map((promotion, index) => (
          <PromotionContainer key={index}>
            <PromotionLeftSide>
              <Typography size="m">{promotion.name}</Typography>
              <Typography size="m">{promotion.description}</Typography>
            </PromotionLeftSide>
            <PromotionRightSide>
              <Button text={'Editar'} onPress={handleGoToEdit(promotion.id)} />
              <Button
                text={'Borrar'}
                type="danger"
                onPress={handleDelete(promotion.id)}
              />
            </PromotionRightSide>
          </PromotionContainer>
        ))}
      </PromotionsContainer>

      <Spacer vertical="l" />
      <Button text="Crear promoción" onPress={handleGoToCreate} />
    </ScreenLayout>
  )
}
