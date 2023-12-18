import { Router } from 'express'
import type { input } from '../types/inputType'
import { createInput } from '../utils/createInput'
import { generateResponse } from '../utils/response'

const router = Router()

router.post('/api/v1/generate', async (req, res) => {
  const body: input = req.body
  const input = createInput(body)
  const response = await generateResponse(input)
  res.json({
    results: [
      {
        text: response
      }
    ]
  })
})

export default router
