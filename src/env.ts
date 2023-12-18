import dotenv from 'dotenv'
import type { envType } from './types/envTypes'

dotenv.config()

const port = process.env.PORT != null ? parseInt(process.env.PORT) : 3500

export const env: envType = Object.freeze({
  PORT: port,
  HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY ?? '',
  PROVIDER: process.env.PROVIDER === 'huggingface' ? 'huggingface' : process.env.PROVIDER === 'fireworks' ? 'fireworks' : 'huggingface',
  FIREWORKS_API_KEY: process.env.FIREWORKS_API_KEY ?? '',
  FIREWORKS_MODEL: process.env.FIREWORKS_MODEL ?? '',
  HUGGINGFACE_MODEL: process.env.HUGGINGFACE_MODEL ?? ''
})
