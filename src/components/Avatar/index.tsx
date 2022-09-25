import React from 'react'
import Typography from '../Typography'
import { AvatarContainer } from './styles'
import { AvatarProps } from './types'

const getInitials = (name: string) => {
  const words = name.split(' ')
  let initials = ''
  if (words.length > 1) {
    initials = `${words[0].charAt(0)}${words[1].charAt(0)}`
  } else {
    initials = `${words[0].charAt(0)}${words[0].charAt(1)}`
  }
  return initials
}

export default function Avatar({ name }: AvatarProps) {
  const initials = getInitials(name)

  return (
    <AvatarContainer>
      <Typography size="m" align="center">
        {initials}
      </Typography>
    </AvatarContainer>
  )
}
