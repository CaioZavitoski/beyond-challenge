import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { enableMSW } from '../api/mocks'
import { ClientsProvider } from '../contexts/ClientsContext'
import { Dashboard } from '../pages/dashboard/dashboard'

beforeAll(() => {
  enableMSW()
})

const queryClient = new QueryClient()

afterEach(() => {
  queryClient.clear()
})

const renderDashboard = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ClientsProvider>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </ClientsProvider>
    </QueryClientProvider>,
  )
}

test('renders Dashboard with loading state', () => {
  renderDashboard()
  expect(screen.getByText(/clientes/i)).toBeInTheDocument()
  expect(screen.getByRole('progressbar')).toBeInTheDocument()
})

test('renders clients after loading', async () => {
  renderDashboard()

  await waitFor(() => {
    expect(screen.getByText(/cliente-1/i)).toBeInTheDocument()
  })
  expect(screen.getAllByRole('row').length).toBeGreaterThan(1)
})

test('filters clients based on input', async () => {
  renderDashboard()

  await waitFor(() => {
    expect(screen.getByText(/cliente-1/i)).toBeInTheDocument()
  })

  userEvent.type(screen.getByPlaceholderText(/nome do cliente/i), 'Cliente 1')
  userEvent.click(screen.getByRole('button', { name: /remover filtros/i }))

  await waitFor(() => {
    expect(screen.getAllByRole('row').length).toBe(2)
  })

  test('displays no results message when no clients match filters', async () => {
    renderDashboard()

    await waitFor(() => {
      expect(screen.getByText(/cliente-1/i)).toBeInTheDocument()
    })

    userEvent.type(
      screen.getByPlaceholderText(/nome do cliente/i),
      'NonExistent',
    )
    userEvent.click(screen.getByRole('button', { name: /remover filtros/i }))

    await waitFor(() => {
      expect(screen.getByText(/nenhum cliente encontrado/i)).toBeInTheDocument()
    })
  })
})
