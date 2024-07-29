import { api } from '../lib/axios'
import { Client } from '../reducers/clients/reducer'

export interface AddClientData {
  name: string
  email: string
  phone: string
  status: string
}

export async function addClient(data: AddClientData): Promise<Client> {
  const response = await api.post<Client>('/clients', data)
  return response.data
}
