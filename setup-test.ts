import '@testing-library/jest-dom'
import { TextDecoder, TextEncoder } from 'util'

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
})
