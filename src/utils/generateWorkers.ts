import type { input } from '../types/inputType'
import { env } from '../env'

export async function generateWorkers (input: input): Promise<any> {
  try {
    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ID}/ai/run/${env.MODEL}`, {
      headers: { Authorization: `Bearer ${env.CLOUDFLARE_API_KEY}` },
      method: 'POST',
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: input.prompt
          }
        ]
      })
    })
    const result = await response.json()
    return result.result.response ?? ''
  } catch (err) {
    if (err instanceof Error) {
      return err.message ?? ''
    }
  }
}
