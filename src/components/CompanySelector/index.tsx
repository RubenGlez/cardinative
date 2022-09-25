import React from 'react'
import Avatar from '../Avatar'
import Selector from '../Selector'
import { SelectorProps } from '../Selector/types'
import Spacer from '../Spacer'
import Typography from '../Typography'
import { CustomInputContainer } from './styles'
import { CompanySelectorProps } from './types'

export default function CompanySelector({
  options,
  selected,
  placeholder,
  onSelect
}: CompanySelectorProps) {
  const customInput: SelectorProps['customInput'] = ({ optSelected }) => {
    return (
      <CustomInputContainer>
        <Avatar name={optSelected?.label ?? ''} />
        <Spacer horizontal="sm" />
        <Typography size="l">{optSelected?.label ?? ''}</Typography>
      </CustomInputContainer>
    )
  }

  return (
    <Selector
      options={options}
      selected={selected}
      placeholder={placeholder}
      onSelect={onSelect}
      customInput={customInput}
    />
  )
}
