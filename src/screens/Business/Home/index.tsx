import React from 'react'
import { Button, ScreenLayout, Spacer, Typography } from '@/components'

export default function BusinessHome() {
  return (
    <ScreenLayout title={'Home'} showBackButton={false}>
      <Typography size="l">Aqui estamos!</Typography>
      <Spacer vertical="l" />
      <Button text="soy fake" onPress={() => {}} />
    </ScreenLayout>
  )
}
