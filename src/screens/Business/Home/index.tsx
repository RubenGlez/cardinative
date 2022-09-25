import React from 'react'
import { Button, ScreenLayout, Spacer, Typography } from '@/components'
import useSignOut from '@/hooks/auth/useSignOut'

export default function BusinessHome() {
  const { handleSignOut } = useSignOut()

  return (
    <ScreenLayout title={'Home'} showBackButton={false}>
      <Typography size="l">Aqui estamos!</Typography>
      <Spacer vertical="l" />
      <Button text="SignOut" type="danger" onPress={handleSignOut} />
    </ScreenLayout>
  )
}
