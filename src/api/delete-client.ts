import { api } from '../lib/axios'

export async function deleteClient(id: string): Promise<void> {
  await api.delete(`/clients/${id}`)
}
