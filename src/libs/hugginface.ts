import { HfInference } from '@huggingface/inference'
import { env } from '../env'

export const HF = new HfInference(env.HUGGINGFACE_API_KEY, {})
