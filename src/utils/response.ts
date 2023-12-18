import type { input } from '../types/inputType'
import { generateHugginface } from './generateHugginface'
import { generateFireworks } from './generateFireworks'
import { env } from '../env'

export async function generateResponse (input: input): Promise<string> {
  const response = env.PROVIDER === 'huggingface' ? await generateHugginface(input) : await generateFireworks(input)
  return response
}
