export interface envType {
  PORT: number
  HUGGINGFACE_API_KEY: string
  PROVIDER: 'huggingface' | 'fireworks'
  FIREWORKS_API_KEY: string
  FIREWORKS_MODEL: string
  HUGGINGFACE_MODEL: string
}
