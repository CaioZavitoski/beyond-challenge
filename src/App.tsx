import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { ThemeProvider } from 'styled-components'

import { queryClient } from './lib/react-query'
import { router } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ClientsProvider } from './contexts/ClientsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <ClientsProvider>
          <RouterProvider router={router} />
          <GlobalStyle />
          <Toaster position='top-right' richColors />
        </ClientsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
