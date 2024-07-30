import { createContext, ReactNode, useReducer } from 'react'
import {
  Client,
  clientsReducer,
  initialState,
  State,
} from '../reducers/clients/reducer'
import {
  setClientsAction,
  setModalTypeAction,
  setSelectedClientAction,
  updateClientAction,
  addClientAction,
  deleteClientAction,
} from '../reducers/clients/action'

export interface ClientsContextType extends State {
  setClients: (clients: Client[]) => void
  setSelectedClient: (client: Client | null) => void
  setModalType: (
    modalType: 'details' | 'edit' | 'delete' | 'add' | null,
  ) => void
  updateClients: (client: Client) => void
  addClient: (client: Client) => void
  deleteClient: (id: string) => void
}

export const ClientsContext = createContext({} as ClientsContextType)

interface ClientsProviderProps {
  children: ReactNode
}

export function ClientsProvider({ children }: ClientsProviderProps) {
  const [state, dispatch] = useReducer(clientsReducer, initialState)

  function setClients(clients: Client[]) {
    dispatch(setClientsAction(clients))
  }

  function setSelectedClient(client: Client | null) {
    dispatch(setSelectedClientAction(client))
  }

  function setModalType(
    modalType: 'details' | 'edit' | 'delete' | 'add' | null,
  ) {
    dispatch(setModalTypeAction(modalType))
  }

  function updateClients(client: Client) {
    dispatch(updateClientAction(client))
  }

  function addClient(client: Client) {
    dispatch(addClientAction(client))
  }

  function deleteClient(id: string) {
    dispatch(deleteClientAction(id))
  }

  return (
    <ClientsContext.Provider
      value={{
        ...state,
        setClients,
        setSelectedClient,
        setModalType,
        updateClients,
        addClient,
        deleteClient,
      }}
    >
      {children}
    </ClientsContext.Provider>
  )
}
