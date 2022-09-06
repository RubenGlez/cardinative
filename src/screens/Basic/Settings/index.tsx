import React from 'react'
import { Button, Layout, Typography } from '@/components'
import useGetUserById from '@/hooks/user/useGetUserById'
import { LogoutContainer, ProfileContainer, SettingsContainer } from './styles'
import useSignOut from '@/hooks/auth/useSignOut'
import useAuthSession from '@/hooks/auth/useAuthSession'

export default function Settings() {
  const [authSession] = useAuthSession()
  const { userId } = authSession
  const { data } = useGetUserById(userId)
  const { handleSignOut } = useSignOut()

  return (
    <Layout type="screen">
      <Typography size="xl">Settings</Typography>
      <SettingsContainer>
        <ProfileContainer>
          <Typography size="xl">{data?.username}</Typography>
          <Typography size="m" color="secondary">
            {data?.email}
          </Typography>
        </ProfileContainer>
        <LogoutContainer>
          <Button text="SignOut" type="danger" onPress={handleSignOut} />
        </LogoutContainer>
      </SettingsContainer>
    </Layout>
  )
}
