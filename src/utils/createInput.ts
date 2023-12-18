import type { input } from '../types/inputType'

export function createInput (body: input): input {
  return {
    max_new_tokens: body.max_new_tokens,
    temperature: body.temperature,
    top_p: body.top_p ?? 0.9,
    prompt: body.prompt,
    top_k: body.top_k ?? 0.9
  }
}
