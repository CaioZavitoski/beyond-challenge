import { api } from '../lib/axios'

export interface RegisterCompanyRequest {
  companyName: string
  managerName: string
  email: string
  phone: string
}

export async function RegisterCompany({
  companyName,
  managerName,
  email,
  phone,
}: RegisterCompanyRequest) {
  await api.post('/companys', { companyName, managerName, email, phone })
}
