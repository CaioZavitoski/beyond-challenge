import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { enableMSW } from '../api/mocks'
import { SignUp } from '../pages/auth/sign-up'

beforeAll(() => {
  enableMSW()
})

const queryClient = new QueryClient()

afterEach(() => {
  queryClient.clear()
})

test('renders SignUp form', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    </QueryClientProvider>,
  )

  expect(screen.getByText(/criar conta/i)).toBeInTheDocument()
})

test('displays validation errors on empty form submission', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    </QueryClientProvider>,
  )

  userEvent.click(screen.getByRole('button', { name: /finalizar cadastro/i }))

  await waitFor(() => {
    expect(screen.getByText(/nome é obrigatório/i)).toBeInTheDocument()
    expect(screen.getByText(/e-mail inválido/i)).toBeInTheDocument()
    expect(screen.getByText(/telefone inválido/i)).toBeInTheDocument()
  })
})

test('redirects on successful registration', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    </QueryClientProvider>,
  )

  userEvent.type(
    screen.getByLabelText(/nome do estabelecimento/i),
    'Test Company',
  )
  userEvent.type(screen.getByLabelText(/seu nome/i), 'Test Manager')
  userEvent.type(screen.getByLabelText(/seu e-mail/i), 'test@example.com')
  userEvent.type(screen.getByLabelText(/celular/i), '(99) 99999-9999')
  userEvent.click(screen.getByRole('button', { name: /finalizar cadastro/i }))

  await waitFor(() => {
    expect(screen.getByText(/estabelecimento cadastrado/i)).toBeInTheDocument()
  })
})

test('displays error message on registration failure', async () => {
  const originalMock = registerCompanyMock
  registerCompanyMock.handler = async () => {
    return HttpResponse.json(
      { message: 'Erro ao registrar estabelecimento!' },
      { status: 500 },
    )
  }

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    </QueryClientProvider>,
  )

  userEvent.type(
    screen.getByLabelText(/nome do estabelecimento/i),
    'Test Company',
  )
  userEvent.type(screen.getByLabelText(/seu nome/i), 'Test Manager')
  userEvent.type(screen.getByLabelText(/seu e-mail/i), 'test@example.com')
  userEvent.type(screen.getByLabelText(/celular/i), '(99) 99999-9999')
  userEvent.click(screen.getByRole('button', { name: /finalizar cadastro/i }))

  await waitFor(() => {
    expect(
      screen.getByText(/erro ao registrar estabelecimento/i),
    ).toBeInTheDocument()
  })

  registerCompanyMock.handler = originalMock.handler
})
