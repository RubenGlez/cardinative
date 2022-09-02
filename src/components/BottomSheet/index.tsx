import React, { forwardRef, Ref } from 'react'
import { Modalize } from 'react-native-modalize'
import {
  BottomSheetHeaderContainer,
  BottomSheetHeaderInner,
  BottomSheetHeaderShadow,
  StyledModalize
} from './styles'
import { Portal } from 'react-native-portalize'
import { Typography, Icon } from '@/components'
import { BottomSheetProps } from './types'

const BottomSheet = forwardRef(
  (
    { label = 'Selecciona', ...modalizeProps }: BottomSheetProps,
    forwardedRef: Ref<Modalize>
  ) => {
    return (
      <Portal>
        <StyledModalize
          {...modalizeProps}
          ref={forwardedRef}
          HeaderComponent={
            <BottomSheetHeaderContainer>
              <BottomSheetHeaderShadow />
              <BottomSheetHeaderInner>
                <Typography>{label}</Typography>
                <Icon
                  name="close-outline"
                  // @ts-ignore
                  onPress={forwardedRef?.current?.close}
                />
              </BottomSheetHeaderInner>
            </BottomSheetHeaderContainer>
          }
          handlePosition="inside"
        />
      </Portal>
    )
  }
)

export default BottomSheet
