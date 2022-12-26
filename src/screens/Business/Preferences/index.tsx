import React from 'react'
import { ScreenLayout, Spacer, Typography } from '@/components'
import useGetPreferences from '@/hooks/preferences/useGetPreferences'

export default function Preferences() {
  const { data } = useGetPreferences()

  return (
    <ScreenLayout title="Preferencias">
      <Typography size="l">{`Empresa seleccionada: ${data?.companySelected}`}</Typography>
      <Spacer vertical="l" />
      <Typography size="l">{`Tema seleccionado: ${data?.themeSelected}`}</Typography>
      <Spacer vertical="l" />
      <Typography size="l">{`Idioma seleccionado: ${data?.languageSelected}`}</Typography>
    </ScreenLayout>
  )
}
