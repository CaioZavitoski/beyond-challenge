import { api } from '../lib/axios'
import { Client } from '../reducers/clients/reducer'

export interface UpdateClientData {
  id: string
  name: string
  email: string
  phone: string
  status: string
}

export async function updateClient(data: UpdateClientData): Promise<Client> {
  const response = await api.put(`/clients/${data.id}`, data)
  return response.data
}
