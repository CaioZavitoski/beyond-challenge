import { setupWorker } from 'msw/browser'
import { registerCompanyMock } from './register-company-mock'

export const worker = setupWorker(registerCompanyMock)

export async function enableMSW() {
  await worker.start()
}
