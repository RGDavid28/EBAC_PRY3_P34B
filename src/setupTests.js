import { TextEncoder, TextDecoder } from 'node:util'

require('jest-fetch-mock').enableFetchMocks();

if (!global.TextEncoder) {
  global.TextEncoder = TextEncoder
}

if (!global.TextDecoder) {
  global.TextDecoder = TextDecoder
}