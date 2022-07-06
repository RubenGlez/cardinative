import React from 'react'
import { Button, Typography } from '@/components'
import useGetUserById from '@/hooks/user/useGetUserById'
import { getDeviceStorageItem } from '@/lib/deviceStorage'
import { LogoutContainer, ProfileContainer, SettingsContainer } from './styles'
import useSignOut from '@/hooks/auth/useSignOut'

export default function SettingsScreen() {
  const userId = getDeviceStorageItem('userId')
  const { data } = useGetUserById(userId ?? '')
  const { handleSignOut } = useSignOut()

  return (
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
  )
}
