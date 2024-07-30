import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import { enableMSW } from '../api/mocks'
import { SignIn } from '../pages/auth/sign-in'

const queryClient = new QueryClient()

beforeAll(() => {
  enableMSW()
})

afterEach(() => {
  queryClient.clear()
})

describe('SignIn', () => {
  test('redirects on successful login', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      </QueryClientProvider>,
    )

    userEvent.type(screen.getByLabelText(/seu e-mail/i), 'test@example.com')
    userEvent.click(screen.getByRole('button', { name: /acessar painel/i }))

    await waitFor(() => {
      const successMessage = screen.getByText(/login efetuado com sucesso/i)
      expect(successMessage).toBeTruthy()
    })
  })
})
