import { setupWorker } from 'msw/browser'
import { registerCompanyMock } from './register-company-mock'
import { signInMock } from './sign-in-mock'
import { getClientsMock } from './get-clients-mock'
import { updateClientMock } from './update-client-mock'

export const worker = setupWorker(
  registerCompanyMock,
  signInMock,
  getClientsMock,
  updateClientMock,
)

export async function enableMSW() {
  await worker.start()
}
