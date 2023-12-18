import { OpenAI } from 'openai'
import { env } from '../env'

export const fireworks = new OpenAI({
  baseURL: 'https://api.fireworks.ai/inference/v1',
  apiKey: env.FIREWORKS_API_KEY
})
