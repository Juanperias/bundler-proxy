import express from 'express'
import { env } from './env'
import { routes } from './routes/routes'
import cors from 'cors'
import localtunnel from 'localtunnel'

const app = express()
const port = env.PORT
app.use(cors())
app.use(express.json())

app.use(routes.checkApiRoute)
app.use(routes.getModelDetailsRoute)
app.use(routes.generateRoute)

app.listen(port, async () => {
  console.log(`Your local url is http://localhost:${port}/api`)

  const tunnel = await localtunnel({ port })
  console.log(`Your public url is ${tunnel.url}`)
})
