import React from 'react'
import { ScreenLayout, Spacer, Typography } from '@/components'
import { ProfileContainer } from './styles'
import useGetCurrentUser from '@/hooks/user/useGetCurrentUser'
import useIntl from '@/hooks/useIntl'

export default function Profile() {
  const { createdAt, email, lastLoginAt, username } = useGetCurrentUser() || {}
  const { formatStringDate } = useIntl()

  return (
    <ScreenLayout title="Edita el perfil">
      <ProfileContainer>
        <Typography size="xl">{'Datos del usuario'}</Typography>
        <Spacer vertical="l" />
        <Typography>{username}</Typography>
        <Typography>{email}</Typography>
        <Spacer vertical="l" />

        <Typography>
          {`Registro: ${createdAt ? formatStringDate(createdAt) : '--'}`}
        </Typography>
        <Typography>
          {`Último acceso: ${
            lastLoginAt ? formatStringDate(lastLoginAt) : '--'
          }`}
        </Typography>
      </ProfileContainer>
    </ScreenLayout>
  )
}