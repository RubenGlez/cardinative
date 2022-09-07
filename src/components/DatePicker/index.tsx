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

  return (
    <>
      <DatePickerContainer
        onPress={() => {
          setIsOpen(true)
        }}>
        <Typography numberOfLines={1}>{label}</Typography>
      </DatePickerContainer>

      <RNDatePicker
        mode="date"
        title="Selecciona una fecha"
        confirmText="Confirmar"
        cancelText="Cancelar"
        modal={true}
        open={isOpen}
        date={value}
        onConfirm={date => {
          setIsOpen(false)
          onChange(date)
          console.log(date)
        }}
        onCancel={() => {
          setIsOpen(false)
        }}
      />
    </>
  )
}
