import React from 'react'
import Typography from '../Typography'
import {
  OptionContainer,
  OptionInner,
  SelectorContainer,
  SelectorContainerInner
} from './styles'
import { SelectorProps } from './types'
import { BottomSheet, Icon } from '@/components'
import useBottomSheet from '@/hooks/components/useBottomSheet'
import { useTheme } from '@/hooks/useTheme'

export default function Selector({
  options = [],
  selected,
  placeholder,
  onSelect,
  customInput
}: SelectorProps) {
  const theme = useTheme()
  const { open, ref, close } = useBottomSheet()
  const optSelected = options.find(option => option.value === selected)
  const handleSelect = (value: string) => () => {
    onSelect(value)
    setTimeout(() => {
      // Just for better UX
      close()
    }, 300)
  }

  return (
    <>
      <SelectorContainer onPress={open as any}>
        {customInput ? (
          customInput({ optSelected })
        ) : (
          <SelectorContainerInner>
            {optSelected ? (
              <Typography numberOfLines={1} size="l">
                {optSelected.label}
              </Typography>
            ) : (
              <Typography numberOfLines={1} color={'inactive'} size="l">
                {placeholder}
              </Typography>
            )}
            <Icon name="chevron-down" color={theme.color.bg_5} />
          </SelectorContainerInner>
        )}
      </SelectorContainer>

      <BottomSheet
        ref={ref}
        label={placeholder}
        flatListProps={{
          data: options,
          keyExtractor: option => option.value,
          renderItem: ({ item }) => {
            const isSelected = item.value === selected
            return (
              <OptionContainer onPress={handleSelect(item.value)}>
                <OptionInner>
                  <Typography numberOfLines={1}>{item.label}</Typography>
                  {isSelected && <Icon name="checkmark-circle-outline" />}
                </OptionInner>
              </OptionContainer>
            )
          }
        }}
      />
    </>
  )
}
