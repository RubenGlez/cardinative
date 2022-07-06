import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import Typography from '../Typography'
import { TabBarContainer, TabBarItem } from './styles'

export default function TabBar({
  state,
  descriptors,
  navigation
}: BottomTabBarProps) {
  return (
    <TabBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

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
            <Typography
              color={isFocused ? 'active' : 'inactive'}
              align="center">
              {/* TODO: render for lable function */}
              {typeof label === 'string' && label}
            </Typography>
          </TabBarItem>
        )
      })}
    </TabBarContainer>
  )
}
