import { Action, ActionTypes } from './action'

export interface Client {
  id: string
  name: string
  email: string
  phone: string
  status: string
}

export interface State {
  clients: Client[]
  selectedClient: Client | null
  modalType: 'details' | 'edit' | 'delete' | 'add' | null
}

export const initialState: State = {
  clients: [],
  selectedClient: null,
  modalType: null,
}

export const clientsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SET_CLIENTS:
      return { ...state, clients: action.payload }
    case ActionTypes.SET_SELECTED_CLIENT:
      return { ...state, selectedClient: action.payload }
    case ActionTypes.SET_MODAL_TYPE:
      return { ...state, modalType: action.payload }
    case ActionTypes.UPDATE_CLIENT:
      return {
        ...state,
        clients: state.clients.map((client) =>
          client.id === action.payload.id ? action.payload : client,
        ),
      }
    case ActionTypes.ADD_CLIENT:
      return { ...state, clients: [...state.clients, action.payload] }
    case ActionTypes.DELETE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter((client) => client.id !== action.payload),
      }
    default:
      return state
  }
}
