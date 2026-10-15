import express from 'express';
import jwt from 'jsonwebtoken'



const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.status(201).json({
        message: "Backend running successfully"
    })
})

app.post('/auth/register', (req,res) => {
    try {
        const {name, email, password} = req.body

        // user stored in database
        const token = jwt.sign({
            name,
            email
        },
        ""
    )

    res.status(201).json({
        message: "user registered successfully",

        data: {
            name, email
        },
        token
    })
    } catch (error) {
        res.status(500).json({
            message: 'internal server error',
            error: error.message
        })
    }
})

export default app