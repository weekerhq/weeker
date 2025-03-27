import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { assertInt } from './assertInt.ts'

const port = assertInt(process.env.PORT)

const app = new Hono()

// Inspired by https://kubernetes.io/docs/reference/using-api/health-checks/
app.get('/readyz', ({ text }) => text('ok'))
app.get('/livez', ({ text }) => text('ok'))

serve({
  fetch: app.fetch,
  port
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
