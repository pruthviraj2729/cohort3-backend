import express from "express"
import appRoutes from "../router/auth.routes.js"

const app = express()

app.use('/api', appRoutes)

app.use(express.json())

export default app 