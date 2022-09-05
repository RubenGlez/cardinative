import { Modalize } from 'react-native-modalize'
import styled from 'styled-components/native'

export const StyledModalize = styled(Modalize).attrs(({ theme }) => ({
  overlayStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)'
  } as any,
  modalStyle: {
    backgroundColor: theme.color.bg_1
  } as any
}))``

export const BottomSheetHeaderContainer = styled.View``
export const BottomSheetHeaderInner = styled.View`
  height: ${({ theme }) => theme.space.xl};
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.space.m};
  align-items: center;
  background-color: ${({ theme }) => theme.color.bg_1};
`

export const BottomSheetHeaderShadow = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 10px;
  background-color: ${({ theme }) => theme.color.bg_5};

  shadow-color: ${({ theme }) => theme.color.bg_5};
  shadow-offset: 0px 0px;
  shadow-opacity: 1;
  shadow-radius: 3px;
  elevation: 3;
`
