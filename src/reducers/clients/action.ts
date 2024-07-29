import { Client } from './reducer'

export enum ActionTypes {
  SET_CLIENTS = 'SET_CLIENTS',
  SET_SELECTED_CLIENT = 'SET_SELECTED_CLIENT',
  SET_MODAL_TYPE = 'SET_MODAL_TYPE',
  UPDATE_CLIENT = 'UPDATE_CLIENT',
  ADD_CLIENT = 'ADD_CLIENT',
  DELETE_CLIENT = 'DELETE_CLIENT',
}

interface SetClientsAction {
  type: ActionTypes.SET_CLIENTS
  payload: Client[]
}

interface SetSelectedClientAction {
  type: ActionTypes.SET_SELECTED_CLIENT
  payload: Client | null
}

interface SetModalTypeAction {
  type: ActionTypes.SET_MODAL_TYPE
  payload: 'details' | 'edit' | 'delete' | 'add' | null
}

interface UpdateClientAction {
  type: ActionTypes.UPDATE_CLIENT
  payload: Client
}

interface AddClientAction {
  type: ActionTypes.ADD_CLIENT
  payload: Client
}

interface DeleteClientAction {
  type: ActionTypes.DELETE_CLIENT
  payload: string
}

export type Action =
  | SetClientsAction
  | SetSelectedClientAction
  | SetModalTypeAction
  | UpdateClientAction
  | AddClientAction
  | DeleteClientAction

export const setClientsAction = (clients: Client[]): SetClientsAction => ({
  type: ActionTypes.SET_CLIENTS,
  payload: clients,
})

export const setSelectedClientAction = (
  client: Client | null,
): SetSelectedClientAction => ({
  type: ActionTypes.SET_SELECTED_CLIENT,
  payload: client,
})

export const setModalTypeAction = (
  modalType: 'details' | 'edit' | 'delete' | 'add' | null,
): SetModalTypeAction => ({
  type: ActionTypes.SET_MODAL_TYPE,
  payload: modalType,
})

export const updateClientAction = (client: Client): UpdateClientAction => ({
  type: ActionTypes.UPDATE_CLIENT,
  payload: client,
})

export const addClientAction = (client: Client): AddClientAction => ({
  type: ActionTypes.ADD_CLIENT,
  payload: client,
})

export const deleteClientAction = (id: string): DeleteClientAction => ({
  type: ActionTypes.DELETE_CLIENT,
  payload: id,
})
