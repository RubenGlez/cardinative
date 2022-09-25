import useIntl from '@/hooks/useIntl'
import React, { useState } from 'react'
import RNDatePicker from 'react-native-date-picker'
import Typography from '../Typography'
import { DatePickerContainer } from './styles'
import { DatePickerProps } from './types'

export default function DatePicker({
  label = '',
  value,
  onChange
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { formatDate, getStringFromDate } = useIntl()
  const internalValue = value ? new Date(value) : new Date()
  const displayDate = value ? formatDate(internalValue) : ''

  return (
    <>
      <DatePickerContainer
        onPress={() => {
          setIsOpen(true)
        }}>
        {displayDate ? (
          <Typography size="l">{displayDate}</Typography>
        ) : (
          <Typography numberOfLines={1} size="l" color={'inactive'}>
            {label}
          </Typography>
        )}
      </DatePickerContainer>

      <RNDatePicker
        mode="date"
        title="Selecciona una fecha"
        confirmText="Confirmar"
        cancelText="Cancelar"
        modal={true}
        open={isOpen}
        date={internalValue}
        onConfirm={date => {
          setIsOpen(false)
          onChange(getStringFromDate(date))
        }}
        onCancel={() => {
          setIsOpen(false)
        }}
      />
    </>
  )
}
