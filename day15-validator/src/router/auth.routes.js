import express from 'express'
import { registerValidation } from '../validator/auth.validator.js'
import { register } from '../controller/auth.controller.js'

const router = express.Router()

router.post('/auth/register', registerValidation, register )

export default router