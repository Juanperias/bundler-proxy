import { Router } from 'express'
import { env } from '../env'

const router = Router()

// GET MODEL DETAILS
router.get('/api/v1/model', (req, res) => {
  res.json({
    result: env.HUGGINGFACE_MODEL
  })
})

export default router
