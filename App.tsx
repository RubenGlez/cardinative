import 'react-native-gesture-handler'

import React from 'react'
import { AppStateStatus, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider, focusManager } from 'react-query'

import { useAppState } from '@/hooks/useAppState'
import { useOnlineManager } from '@/hooks/useOnlineManager'
import { ThemeManagerProvider } from '@/contexts/theme'
import { Layout, Toast as ToastContainer } from '@/components'
import { RootStack } from '@/navigation/RootStack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } }
})

export default function App() {
  useOnlineManager()
  useAppState(onAppStateChange)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeManagerProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Layout>
              <RootStack />
            </Layout>
            <ToastContainer />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeManagerProvider>
    </QueryClientProvider>
  )
}
