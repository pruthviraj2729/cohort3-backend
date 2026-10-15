import express from 'express'
import dbConnect from './config/db.connect.js'
import dotenv from "dotenv"
import router from './router/posts.route.js'


dotenv.config()
const app = express()

app.use(express.json())





dbConnect()

app.get('/', (req, res) => {
   res.send("Backend is running ")
})

app.use('/', router)

export default app

