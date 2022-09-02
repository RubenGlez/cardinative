import React from 'react'
import Typography from '../Typography'
import { OptionContainer, SelectorContainer } from './styles'
import { SelectorProps } from './types'
import { BottomSheet, Icon } from '@/components'
import useBottomSheet from '@/hooks/useBottomSheet'

export default function Selector({
  options = [],
  selected,
  placeholder,
  onSelect
}: SelectorProps) {
  const { open, ref } = useBottomSheet()
  return (
    <>
      <SelectorContainer onPress={open as any}>
        <Typography numberOfLines={1}>Soy un selector</Typography>
        <Icon name="chevron-down" />
      </SelectorContainer>

      <BottomSheet ref={ref} label={'Selecciona algo'}>
        {options.map(option => {
          return (
            <OptionContainer>
              <Typography numberOfLines={1}>{option.label}</Typography>
            </OptionContainer>
          )
        })}
      </BottomSheet>
    </>
  )
}
