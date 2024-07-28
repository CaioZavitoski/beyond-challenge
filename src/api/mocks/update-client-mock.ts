import { http, HttpResponse } from 'msw'
import { GetClientsResponse } from '../get-clients'

interface UpdateClientBody {
  id: string
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

export const updateClientMock = http.put<UpdateClientBody>(
  '/clients/:id',
  ({ request, params }) => {
    const { id } = params
    const updatedClient = request.body

    const clientIndex = clients.clients.findIndex((client) => client.id === id)

    if (clientIndex !== -1) {
      clients.clients[clientIndex] = {
        ...clients.clients[clientIndex],
        ...updatedClient,
      }
      return HttpResponse.json(clients.clients[clientIndex])
    }
    return HttpResponse.json({ message: 'Client not found' }, { status: 404 })
  },
)
