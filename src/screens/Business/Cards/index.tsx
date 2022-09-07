import React, { useCallback, useEffect } from 'react'
import { Button, ScreenLayout, Spacer, Typography } from '@/components'
import useGetCards from '@/hooks/card/useGetCards'
import { useNavigation } from '@react-navigation/native'
import { RootNavigation } from '@/navigation/types'
import {
  BUSINESS_STACK,
  CREATE_CARD_SCREEN,
  EDIT_CARD_SCREEN
} from '@/navigation/constants'
import {
  CardsContainer,
  CardContainer,
  CardLeftSide,
  CardRightSide
} from './styles'
import useDeleteCard from '@/hooks/card/useDeleteCard'
import { Card } from '@/entities'

export default function Cards() {
  const { navigate } = useNavigation<RootNavigation>()
  const { data: cards = [], isFetched } = useGetCards()
  const { mutate } = useDeleteCard({})
  const cardsLength = cards?.length
  const handleGoToEdit = (id: any) => () => {
    if (!id) return
    navigate(BUSINESS_STACK, {
      screen: EDIT_CARD_SCREEN,
      params: {
        cardIdToEdit: id
      }
    })
  }
  const handleGoToCreate = useCallback(() => {
    navigate(BUSINESS_STACK, {
      screen: CREATE_CARD_SCREEN
    })
  }, [navigate])
  const handleDelete = useCallback(
    (id: Card['id']) => () => {
      if (!id) return
      mutate(id)
    },
    [mutate]
  )

  useEffect(() => {
    if (isFetched && !cardsLength) {
      handleGoToCreate()
    }
  }, [cardsLength, handleGoToCreate, isFetched])

  return (
    <ScreenLayout title={'Tarjetas'} showBackButton={false}>
      <CardsContainer>
        {cards?.map((card, index) => (
          <CardContainer key={index}>
            <CardLeftSide>
              <Typography size="m">{card.name}</Typography>
              <Typography size="m">{card.description}</Typography>
            </CardLeftSide>
            <CardRightSide>
              <Button text={'Editar'} onPress={handleGoToEdit(card.id)} />
              <Button
                text={'Borrar'}
                type="danger"
                onPress={handleDelete(card.id)}
              />
            </CardRightSide>
          </CardContainer>
        ))}
      </CardsContainer>

      <Spacer vertical="l" />
      <Button text="Crear tarjeta" onPress={handleGoToCreate} />
    </ScreenLayout>
  )
}
