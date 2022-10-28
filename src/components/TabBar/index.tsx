import React from 'react'
import { useTheme } from '@/hooks/useTheme'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import Icon from '../Icon'
import Typography from '../Typography'
import { TabBarContainer, TabBarItem } from './styles'
import {
  BUSINESS_CREATE_SUBSCRIPTION_SCREEN,
  BUSINESS_HOME_SCREEN,
  BUSINESS_PROMOTIONS_SCREEN
} from '@/navigation/constants'

const icons = {
  [BUSINESS_HOME_SCREEN]: 'home-outline',
  [BUSINESS_CREATE_SUBSCRIPTION_SCREEN]: 'qr-code-outline',
  [BUSINESS_PROMOTIONS_SCREEN]: 'receipt-outline'
}
export default function TabBar({
  state,
  descriptors,
  navigation
}: BottomTabBarProps) {
  const theme = useTheme()
  return (
    <TabBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const isFocused = state.index === index
        const label = options.title
        const textColor = isFocused ? 'active' : 'inactive'
        const iconColor = isFocused
          ? theme.color.text_active
          : theme.color.text_inactive
        const routeName = route.name as keyof typeof icons
        const iconName = icons[routeName]

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })
          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params
            // inside the tab screen are preserved
            navigation.navigate(route.name, { merge: true })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <TabBarItem key={index} onPress={onPress} onLongPress={onLongPress}>
            <Icon name={iconName} size="m" color={iconColor} />
            <Typography color={textColor} align="center">
              {label}
            </Typography>
          </TabBarItem>
        )
      })}
    </TabBarContainer>
  )
}
