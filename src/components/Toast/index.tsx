import React from 'react'
import Toast, {
  ToastConfig,
  ToastConfigParams
} from 'react-native-toast-message'
import Typography from '../Typography'
import { CustomToastContainer, CustomToastOutterContainer } from './styles'

const toastsConfig: ToastConfig = {
  success: props => {
    return <CustomToast {...props} />
  },
  error: props => {
    return <CustomToast {...props} />
  },
  info: props => {
    return <CustomToast {...props} />
  }
}

function CustomToast({ text1, type }: ToastConfigParams<any>) {
  return (
    <CustomToastOutterContainer>
      <CustomToastContainer type={type}>
        <Typography size="m" color="alt">
          {text1}
        </Typography>
      </CustomToastContainer>
    </CustomToastOutterContainer>
  )
}

export default function ToastsContainer() {
  return (
    <Toast
      config={toastsConfig}
      position="top"
      autoHide={true}
      visibilityTime={5000}
    />
  )
}
