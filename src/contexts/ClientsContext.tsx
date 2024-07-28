import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  setClientsAction,
  setModalTypeAction,
  setSelectedClientAction,
  updateClientAction,
} from '../reducers/clients/action'
import {
  Client,
  clientsReducer,
  initialState,
} from '../reducers/clients/reducer'

interface ClientsContextType {
  clients: Client[]
  selectedClient: Client | null
  modalType: 'details' | 'edit' | 'delete' | null
  setClients: (clients: Client[]) => void
  setSelectedClient: (client: Client | null) => void
  setModalType: (modalType: 'details' | 'edit' | 'delete' | null) => void
  updateClients: (client: Client) => void
}

export const ClientsContext = createContext({} as ClientsContextType)

interface ClientsProviderProps {
  children: ReactNode
}

export function ClientsProvider({ children }: ClientsProviderProps) {
  const [state, dispatch] = useReducer(clientsReducer, initialState)

  useEffect(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@client-crud:clients-state-1.0.0',
    )

    if (storedStateAsJSON) {
      dispatch(setClientsAction(JSON.parse(storedStateAsJSON).clients))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      '@client-crud:clients-state-1.0.0',
      JSON.stringify(state),
    )
  }, [state])

  function setClients(clients: Client[]) {
    dispatch(setClientsAction(clients))
  }

  function setSelectedClient(client: Client | null) {
    dispatch(setSelectedClientAction(client))
  }

  function setModalType(modalType: 'details' | 'edit' | 'delete' | null) {
    dispatch(setModalTypeAction(modalType))
  }

  function updateClients(client: Client) {
    dispatch(updateClientAction(client))
  }

  return (
    <ClientsContext.Provider
      value={{
        clients: state.clients,
        selectedClient: state.selectedClient,
        modalType: state.modalType,
        setClients,
        setSelectedClient,
        setModalType,
        updateClients,
      }}
    >
      {children}
    </ClientsContext.Provider>
  )
}
