import 'react-native-gesture-handler'

import React from 'react'
import { AppStateStatus, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {
  QueryClient,
  QueryClientProvider,
  focusManager
} from '@/lib/queryClient'

import { useAppState } from '@/hooks/useAppState'
import { useOnlineManager } from '@/hooks/useOnlineManager'
import { ThemeManagerProvider } from '@/contexts/theme'
import { Layout, Toast as ToastContainer } from '@/components'
import { RootStack } from '@/navigation/RootStack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Host } from 'react-native-portalize'

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 30, // 30 seconds
      cacheTime: 1000 * 30, // 30 seconds
      refetchOnMount: 'always',
      refetchOnWindowFocus: 'always',
      refetchOnReconnect: 'always',
      refetchInterval: 1000 * 30, // 30 seconds
      refetchIntervalInBackground: false,
      suspense: false
    },
    mutations: {
      retry: 2
    }
  }
})

if (__DEV__) {
  import('react-query-native-devtools').then(({ addPlugin }) => {
    addPlugin({ queryClient })
  })
}

export default function App() {
  useOnlineManager()
  useAppState(onAppStateChange)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeManagerProvider>
        <SafeAreaProvider>
          <Host>
            <NavigationContainer>
              <Layout type="main">
                <RootStack />
              </Layout>
              <ToastContainer />
            </NavigationContainer>
          </Host>
        </SafeAreaProvider>
      </ThemeManagerProvider>
    </QueryClientProvider>
  )
}
