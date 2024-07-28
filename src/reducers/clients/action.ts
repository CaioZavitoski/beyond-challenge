import { Client } from './reducer'

export enum ActionTypes {
  SET_CLIENTS = 'SET_CLIENTS',
  SET_SELECTED_CLIENT = 'SET_SELECTED_CLIENT',
  SET_MODAL_TYPE = 'SET_MODAL_TYPE',
  UPDATE_CLIENT = 'UPDATE_CLIENT',
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
  payload: 'details' | 'edit' | 'delete' | null
}

interface UpdateClientAction {
  type: ActionTypes.UPDATE_CLIENT
  payload: Client
}

export type Action =
  | SetClientsAction
  | SetSelectedClientAction
  | SetModalTypeAction
  | UpdateClientAction

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
  modalType: 'details' | 'edit' | 'delete' | null,
): SetModalTypeAction => ({
  type: ActionTypes.SET_MODAL_TYPE,
  payload: modalType,
})

export const updateClientAction = (client: Client): UpdateClientAction => ({
  type: ActionTypes.UPDATE_CLIENT,
  payload: client,
})
