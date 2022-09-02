import React from 'react'
import Icon from '../Icon'
import { Spacer, Typography } from '@/components'
import {
  ScreenLayoutContainer,
  ScreenLayoutContent,
  ScreenLayoutFooter,
  ScreenLayoutHeader
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { ScreenLayoutProps } from './types'

export default function ScreenLayout({
  handleClose,
  showBackButton = true,
  title,
  children,
  footer
}: ScreenLayoutProps) {
  const { goBack } = useNavigation()

  return (
    <ScreenLayoutContainer>
      <ScreenLayoutHeader>
        {showBackButton && <Icon name="arrow-back-outline" onPress={goBack} />}
        <Spacer horizontal="sm" />
        <Typography size="xl" color="primary">
          {title}
        </Typography>
        {handleClose && <Icon name="close-outline" onPress={handleClose} />}
      </ScreenLayoutHeader>
      <ScreenLayoutContent>{children}</ScreenLayoutContent>
      {footer && <ScreenLayoutFooter>{footer}</ScreenLayoutFooter>}
    </ScreenLayoutContainer>
  )
}
