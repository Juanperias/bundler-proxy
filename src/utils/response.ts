import type { input } from '../types/inputType'
import { generateHugginface } from './generateHugginface'
import { generateFireworks } from './generateFireworks'
import { generateLLama } from './generateLlama'
import { generateWorkers } from './generateWorkers'
import { env } from '../env'

export async function generateResponse (input: input): Promise<string> {
  let response = ''

  switch (env.PROVIDER) {
    case 'fireworks':
      response = await generateFireworks(input)
      break
    case 'llama':
      response = await generateLLama(input)
      break
    case 'huggingface':
      response = await generateHugginface(input)
      break
    case 'workers':
      response = await generateWorkers(input)
      break
  }

  return response
}
