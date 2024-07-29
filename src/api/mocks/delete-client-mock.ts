import { http, HttpResponse } from 'msw'
import { GetClientsResponse } from '../get-clients'

const clients: GetClientsResponse = {
  clients: Array.from({ length: 10 }).map((_, index) => ({
    id: `cliente-${index + 1}`,
    name: `Cliente ${index + 1}`,
    email: `Cliente${index + 1}@teste.com`,
    phone: `(99) 99999-9999`,
    status: index % 2 === 0 ? 'Ativo' : 'Inativo',
  })),
}

export const deleteClientMock = http.delete(
  '/clients/:id',
  async ({ params }) => {
    const { id } = params
    const clientIndex = clients.clients.findIndex((client) => client.id === id)

    if (clientIndex !== -1) {
      clients.clients.splice(clientIndex, 1)
      return HttpResponse.json({ message: 'Client deleted successfully' })
    }
    return HttpResponse.json({ message: 'Client not found' }, { status: 404 })
  },
)
