import type { input } from '../types/inputType'
import { env } from '../env'
import { HF } from '../libs/hugginface'

export async function generateHugginface (input: input): Promise<string> {
  const response = await HF.textGeneration({
    inputs: input.prompt,
    model: env.HUGGINGFACE_MODEL,
    parameters: {
      top_k: input.top_k,
      top_p: input.top_p,
      temperature: input.temperature,
      max_new_tokens: input.max_new_tokens
    }
  })

  return response.generated_text
}
