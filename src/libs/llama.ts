import { OpenAI } from 'openai'
import { env } from '../env'

export const llama = new OpenAI({
  apiKey: env.LLAMA_API_KEY,
  baseURL: 'https://api.llama-api.com'
})
