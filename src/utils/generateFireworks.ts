import { env } from '../env'
import { fireworks } from '../libs/fireworks'
import type { input } from '../types/inputType'

export async function generateFireworks (input: input): Promise<string> {
  const response = await fireworks.chat.completions.create({
    model: env.FIREWORKS_MODEL,
    messages: [
      {
        role: 'user',
        content: input.prompt
      }
    ],
    temperature: input.temperature,
    top_p: input.top_p
  })

  return response.choices[0].message.content ?? ''
}
