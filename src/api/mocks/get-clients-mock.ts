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

export const getClientsMock = http.get<never, never, GetClientsResponse>(
  '/clients',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const clientId = searchParams.get('clientId')
    const name = searchParams.get('name')
    const email = searchParams.get('email')
    const phone = searchParams.get('phone')
    const status = searchParams.get('status')

    let filteredClients = clients.clients

    if (clientId) {
      filteredClients = filteredClients.filter(
        (client) => client.id === clientId,
      )
    }

    if (name) {
      filteredClients = filteredClients.filter((client) =>
        client.name.toLowerCase().includes(name.toLowerCase()),
      )
    }

    if (email) {
      filteredClients = filteredClients.filter((client) =>
        client.email.toLowerCase().includes(email.toLowerCase()),
      )
    }

    if (phone) {
      filteredClients = filteredClients.filter((client) =>
        client.phone.includes(phone),
      )
    }

    if (status) {
      filteredClients = filteredClients.filter(
        (client) => client.status === status,
      )
    }

    return HttpResponse.json({
      clients: filteredClients,
    })
  },
)
