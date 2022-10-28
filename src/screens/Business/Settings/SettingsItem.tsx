import React from 'react'
import { Icon, Spacer, Typography } from '@/components'
import { SettingsItemContainer, SettingsItemInner } from './styles'

export default function SettingsItem({ onPress, label, icon }) {
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
