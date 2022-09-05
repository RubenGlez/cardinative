import React from 'react'
import Typography from '../Typography'
import { OptionContainer, OptionInner, SelectorContainer } from './styles'
import { SelectorProps } from './types'
import { BottomSheet, Icon } from '@/components'
import useBottomSheet from '@/hooks/useBottomSheet'

export default function Selector({
  options = [],
  selected,
  placeholder,
  onSelect
}: SelectorProps) {
  const { open, ref, close } = useBottomSheet()
  const itemSelected = options.find(option => option.value === selected)
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
        {itemSelected ? (
          <Typography numberOfLines={1}>{itemSelected.label}</Typography>
        ) : (
          <Typography numberOfLines={1}>{placeholder}</Typography>
        )}
        <Icon name="chevron-down" />
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
