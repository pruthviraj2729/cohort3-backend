import express from "express";
import jwt from "jsonwebtoken";
import { dbConnect } from "./src/config/db.js";
import dotenv from "dotenv";
import userMiddleware from "./src/middelware/user.middelware.js";
import userModel from "./src/model/user.model.js";
import bcrypt from 'bcrypt'


dotenv.config();

const app = express();

app.use(express.json());

dbConnect();

app.get('/', (req, res) => {
    res.send("Backend server is running")
})

app.post('/api/auth/register', async (req, res) => {
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password) return res.status(400).json({
            success: false,
            message: "All fields are required"
        });

        const user = await userModel.create({
            name, email, password: await bcrypt.hash(password, 10)
        })

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET
        )

        res.status(201).json({
            message: "user registered successfully",
            data: {
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
} )


app.get('/api/auth/me', userMiddleware , async(req, res) => { 

    console.log(req.user)

    res.status(201).json({
        message: "user fetched successfully",
        data: {
            user:req.user
        }
    })

})


app.post('/api/auth/login', async(req, res) => {
    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({
            email
        })

        const isValidPassword = bcrypt.compare(password, user.password)

        if(!isValidPassword) {
            return res.status(500).json({
                message: "Inavlid email or password"
            })
        }

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET)

        res.status(201).json({
            message: "user loggedIn successfully",
            data: {
                 user: {
                    email: user.email,
                    name: user.name
                 }
            },

            token
        })

    } catch (error) {
        res.status(201).json({
            message: "Invalid",
            error: error.message
        })
    }
})

export default app;