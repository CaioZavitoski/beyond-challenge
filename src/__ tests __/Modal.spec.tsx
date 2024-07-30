import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { Modal } from '../components/Modal'
import { ClientsContext, ClientsContextType } from '../contexts/ClientsContext'

const queryClient = new QueryClient()

afterEach(() => {
  queryClient.clear()
})

const renderModalWithContext = (contextValue: Partial<ClientsContextType>) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <ClientsContext.Provider value={contextValue as ClientsContextType}>
        <MemoryRouter>
          <Modal />
        </MemoryRouter>
      </ClientsContext.Provider>
    </QueryClientProvider>,
  )
}

test('renders details modal', () => {
  const selectedClient = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123456789',
    status: 'Ativo',
  }
  const contextValue = {
    modalType: 'details' as const,
    selectedClient: selectedClient,
  } as Partial<ClientsContextType> & {
    modalType: 'details' | 'edit' | 'delete' | 'add' | null | undefined
  }

  renderModalWithContext(contextValue as Partial<ClientsContextType>)

  expect(screen.getByText(/detalhes do cliente/i)).toBeInTheDocument()
  expect(screen.getByText(/john doe/i)).toBeInTheDocument()
})

test('renders add modal', () => {
  const contextValue = { modalType: 'add' as const }

  renderModalWithContext(contextValue)

  expect(screen.getByText(/adicionar cliente/i)).toBeInTheDocument()
})

test('renders edit modal', () => {
  const selectedClient = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123456789',
    status: 'Ativo',
  }
  const contextValue = { modalType: 'edit' as const, selectedClient }

  renderModalWithContext(contextValue)

  expect(screen.getByText(/editar cliente/i)).toBeInTheDocument()
  expect(screen.getByDisplayValue(/john doe/i)).toBeInTheDocument()
})

test('renders delete modal', () => {
  const selectedClient = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123456789',
    status: 'Ativo',
  }
  const contextValue = { modalType: 'delete' as const, selectedClient }

  renderModalWithContext(contextValue)

  expect(screen.getByText(/deletar cliente/i)).toBeInTheDocument()
  expect(
    screen.getByText(/tem certeza que deseja deletar john doe/i),
  ).toBeInTheDocument()
})
