import { setupWorker } from 'msw/browser'

export const worker = setupWorker()

export async function enableMSW() {
  await worker.start()
}
