import dotenv from 'dotenv'
import type { envType } from './types/envTypes'

dotenv.config()

const port = process.env.PORT != null ? parseInt(process.env.PORT) : 3500

export const env: envType = Object.freeze({
  PORT: port,
  HUGGINGFACE_API_KEY: process.env.HUGGINGFACE_API_KEY ?? '',
  PROVIDER: process.env.PROVIDER === 'huggingface' ? 'huggingface' : process.env.PROVIDER === 'fireworks' ? 'fireworks' : process.env.PROVIDER === 'llama' ? 'llama' : 'workers',
  FIREWORKS_API_KEY: process.env.FIREWORKS_API_KEY ?? '',
  MODEL: process.env.MODEL ?? '',
  CLOUDFLARE_API_KEY: process.env.CLOUDFLARE_API_KEY ?? '',
  CLOUDFLARE_ID: process.env.CLOUDFLARE_ID ?? '',
  LLAMA_API_KEY: process.env.LLAMA_API_KEY ?? ''
})
