import { generateResponse } from '../utils/response'
import { Router } from 'express'
import { createInput } from '../utils/createInput'
import { env } from '../env'

const router = Router()

// CHECK KEY
router.get('/', async (req, res) => {
  try {
    const body = {
      top_k: 50,
      top_p: 0.9,
      prompt: 'Can you say hi!',
      temperature: 0.5,
      max_new_tokens: 250
    }

    const input = createInput(body)
    await generateResponse(input)

    res.json({
      status: '200',
      message: `RUNNING ${env.MODEL}`
    })
  } catch (e) {
    if (e instanceof Error) {
      res.status(401).json({
        status: '401',
        message: 'invalid key'
      })
      console.log(e)
    }
  }
})

export default router
