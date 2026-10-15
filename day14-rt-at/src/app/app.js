import express from 'express'
import { parseCookie } from 'cookie'
import router from '../router/auth.router.js';

const app = express();

app.use(express.json())

app.use((req, res, next) => {
	req.cookies = parseCookie(req.headers.cookie || '')
	next()
})

app.use('/api', router)

export default app