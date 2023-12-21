import { Router } from 'express'
import { env } from '../env'

const router = Router()

// GET MODEL DETAILS
router.get('/api/v1/model', (req, res) => {
  res.json({
    result: env.MODEL
  })
})

export default router
