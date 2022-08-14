import { CreateCompanyInputData, createCompanyRequest } from '@/lib/api/company'
import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import useNotifications from '../useNotifications'

export default function useCreateCompany() {
  const { showErrorToast, showSuccessToast } = useNotifications()

  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (inputData: CreateCompanyInputData) => createCompanyRequest(inputData),
    {
      onSuccess: ({ data }: any) => {
        showSuccessToast({
          text1: 'Empresa creada con nombre' + data.name
        })
      },
      onError: (error: any) => {
        showErrorToast({
          text1: error.message
        })
      }
    }
  )

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      name: '',
      description: '',
      contact: {
        email: '',
        phone: '',
        web: ''
      }
    },
    onSubmit: (formValues, { resetForm }) => {
      console.log(formValues)
      mutate(formValues)
      resetForm()
    }
  })

  return {
    isLoading,
    isError,
    isSuccess,
    handleChange,
    handleSubmit,
    values
  }
}
