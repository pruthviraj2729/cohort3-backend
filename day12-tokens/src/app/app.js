import express from "express";
import dbConnect from "../config/db.connect.js";
import dotenv from 'dotenv'
import jwt from "jsonwebtoken";
import userModel from "../model/user.model.js";
import bcrypt from 'bcrypt'
import userMiddelware from "../middelware/auth.misselware.js";

dotenv.config();

const app = express();

app.use(express.json());

await dbConnect();

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Backend server is running"
    })
})

app.post('/api/auth/register', async (req, res) => {
    try {
        const { name , email, password} = req.body;

        if(!name || !email || !password) return res.status(400).json({
            success: false,
            message: "All fields are required"
        })


         const user = await userModel.create({
            name, email, password: await bcrypt.hash(password, 10)
        })

        const token = jwt.sign({
            id: user._id,
        },
        process.env.JWT_SECRET 
        )

        res.status(201).json({
            message: "user registered successfully",
            data:{
                user
            },
            token
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error",
            error: error.message 
        })
    }
})


app.get('/api/auth/me', userMiddelware, async(req, res) => {

    console.log(req.user)

    res.status(200).json({
        message: "user fetched successfully",
        data: req.user
    })
} )


app.post('/api/auth/login', async(req, res) => {

    const { email, password } = req.body;

    if(!email || !password) return res.status(400).json({
        success: false,
        message: "All fields are required"
    })

    const user = await userModel.findOne({ email });

    if(!user) return res.status(404).json({
        success: false,
        message: "user not found" 
    })

    const isValidPasswird = await bcrypt.compare(password, user.password);

    if(!isValidPasswird) return res.status(400).json({ 
        success: false,
        message: "invalid credentials"
    })

    const token = jwt.sign(
        {id: user._id},
        process.env.JWT_SECRET
    )

    res.status(200).json({
        message: "user logged in successfully",
        data: {
            user: {
                email: user.email,
                name: user.name
            }
        },
        token
    })

})

export default app;