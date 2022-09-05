import { Button, ScreenLayout, Spacer, Typography } from '@/components'
import { BUSINESS_STACK, CREATE_CARD_SCREEN } from '@/navigation/constants'
import { RootNavigation } from '@/navigation/types'
import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'

export default function BusinessCards() {
  const { navigate } = useNavigation<RootNavigation>()

  const handleGoToCreate = useCallback(() => {
    navigate(BUSINESS_STACK, {
      screen: CREATE_CARD_SCREEN
    })
  }, [navigate])

  return (
    <ScreenLayout title={'Cards'} showBackButton={false}>
      <Typography size="l">Mis tarjetas:</Typography>
      <Spacer vertical="l" />
      <Button text="Crear tarjeta" onPress={handleGoToCreate} />
    </ScreenLayout>
  )
}
