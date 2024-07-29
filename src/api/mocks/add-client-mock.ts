import { http, HttpResponse } from 'msw'
import { GetClientsResponse } from '../get-clients'
import { Client } from '../../reducers/clients/reducer'

interface AddClientBody {
  name: string
  email: string
  phone: string
  status: string
}

const clients: GetClientsResponse = {
  clients: Array.from({ length: 10 }).map((_, index) => ({
    id: `cliente-${index + 1}`,
    name: `Cliente ${index + 1}`,
    email: `Cliente${index + 1}@teste.com`,
    phone: `(99) 99999-9999`,
    status: index % 2 === 0 ? 'Ativo' : 'Inativo',
  })),
}

export const addClientMock = http.post<AddClientBody>(
  '/clients',
  async ({ request }) => {
    const newClient = await request.json()

    if (!newClient) {
      return HttpResponse.json(
        { message: 'The name field is required' },
        { status: 400 },
      )
    }

    const id = `cliente-${clients.clients.length + 1}`
    const client = { id, ...newClient }
    clients.clients.push(client)
    return HttpResponse.json(client)
  },
)
