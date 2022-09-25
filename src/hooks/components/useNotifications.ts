import Toast, { ToastShowParams } from 'react-native-toast-message'

export default function useNotifications() {
  const showSuccessToast = (params: ToastShowParams) => {
    Toast.show({
      ...params,
      type: 'success'
    })
  }
  const showErrorToast = (params: ToastShowParams) => {
    Toast.show({
      ...params,
      type: 'error'
    })
  }
  const showInfoToast = (params: ToastShowParams) => {
    Toast.show({
      ...params,
      type: 'info'
    })
  }
  const hideToast = () => {
    Toast.hide()
  }

  return {
    showSuccessToast,
    showErrorToast,
    showInfoToast,
    hideToast
  }
}
