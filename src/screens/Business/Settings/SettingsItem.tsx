import React from 'react'
import { Icon, Spacer, Typography } from '@/components'
import { SettingsItemContainer, SettingsItemInner } from './styles'

interface SettingsItemProps {
  onPress: () => void
  label: string
  icon: string
}

export default function SettingsItem({
  onPress,
  label,
  icon
}: SettingsItemProps) {
  return (
    <SettingsItemContainer onPress={onPress}>
      <SettingsItemInner>
        <Icon name={icon} />
        <Spacer horizontal="m" />
        <Typography size="l">{label}</Typography>
      </SettingsItemInner>
      <Icon name="chevron-forward-outline" size="s" />
    </SettingsItemContainer>
  )
}
