import { api } from '../lib/axios'

export interface GetClientsQuery {
  id: string | null
  name: string | null
  email: string | null
  phone: string | null
  status: string | null
}

export interface GetClientsResponse {
  clients: {
    id: string
    name: string
    email: string
    phone: string
    status: string
  }[]
}

export async function getClients({
  id,
  name,
  email,
  phone,
  status,
}: GetClientsQuery) {
  const response = await api.get<GetClientsResponse>('/clients', {
    params: {
      id,
      name,
      email,
      phone,
      status,
    },
  })

  return response.data
}
