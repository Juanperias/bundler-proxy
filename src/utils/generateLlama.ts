import { env } from '../env'
import { llama } from '../libs/llama'
import type { input } from '../types/inputType'

export async function generateLLama (input: input): Promise<string> {
  const res = await llama.chat.completions.create({
    model: env.MODEL,
    messages: [
      {
        role: 'user',
        content: input.prompt
      }
    ],
    temperature: input.temperature,
    top_p: input.top_p
  })
  return res.choices[0].message.content ?? ''
}
