import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { TextDecoder, TextEncoder } from 'util'

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
})
