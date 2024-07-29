import { setupWorker } from 'msw/browser'
import { getClientsMock } from './get-clients-mock'
import { registerCompanyMock } from './register-company-mock'
import { signInMock } from './sign-in-mock'
import { updateClientMock } from './update-client-mock'
import { addClientMock } from './add-client-mock'
import { deleteClientMock } from './delete-client-mock'

export const worker = setupWorker(
  registerCompanyMock,
  signInMock,
  getClientsMock,
  updateClientMock,
  addClientMock,
  deleteClientMock,
)

export async function enableMSW() {
  await worker.start()
}
