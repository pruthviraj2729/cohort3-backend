import express from 'express'
import { getUserController, refreshTokenController, registerController } from '../controller/auth.controllers.js'
import middelware from '../middelware/user.middelware.js'

const router = express.Router()

router.post('/auth/register', registerController)

router.get('/auth/me', middelware ,getUserController)

router.post('/auth/refresh-token', refreshTokenController)

export default router