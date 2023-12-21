export interface envType {
  PORT: number
  HUGGINGFACE_API_KEY: string
  PROVIDER: 'huggingface' | 'fireworks' | 'llama' | 'workers'
  FIREWORKS_API_KEY: string
  LLAMA_API_KEY: string
  CLOUDFLARE_API_KEY: string
  CLOUDFLARE_ID: string
  MODEL: string
}
