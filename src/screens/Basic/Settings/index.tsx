import React from 'react'
import { Button, Layout, Typography } from '@/components'
import { LogoutContainer, SettingsContainer } from './styles'
import useSignOut from '@/hooks/auth/useSignOut'

export default function Settings() {
  const { handleSignOut } = useSignOut()

  return (
    <Layout type="screen">
      <Typography size="xl">Settings</Typography>
      <SettingsContainer>
        <LogoutContainer>
          <Button text="SignOut" type="danger" onPress={handleSignOut} />
        </LogoutContainer>
      </SettingsContainer>
    </Layout>
  )
}
