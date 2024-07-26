import { setupWorker } from 'msw/browser'
import { registerCompanyMock } from './register-company-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(registerCompanyMock, signInMock)

export async function enableMSW() {
  await worker.start()
}
