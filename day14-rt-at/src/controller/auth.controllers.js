import userModel from "../model/auth.model.js"
import bcrypt from "bcrypt";
import { generateTokens, verifyRefreshToken } from "../utils/auth.js";

export const registerController = async(req, res) => {
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password) {
            return res.status(401).json({
                status: false,
                message: "All fields are required",

            })
        }

        const isUserExists = await userModel.findOne({email})

        if(isUserExists) {
            return res.status(400).json({
                message: "User already exists",
                errors: [
                    {
                        path: "email",
                        message: "user already exists"
                    }
                ]
            })
        }

        const user = await userModel.create({
            name,
            email,
            passwordHash: await bcrypt.hash(password, 12)
        })

        const {refreshToken, accessToken} = generateTokens({userId: user._id})

         res.cookie("refreshToken", refreshToken, {
            httpOnly: true
        })

        user.refreshToken = refreshToken

        await user.save()

       

        res.status(201).json({
            message: "User registersuccessfully",
            data: {
                user: {
                    name: user.name,
                    email:user.email
                }
            },
            accessToken
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

export const getUserController = (req, res) => {
    try {
        console.log(req.user)

        return res.status(200).json({
            message: "user featched successfully",
            data: {
                user: {
                    name: req.user.name,
                    email: req.user.email
                }
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}

export const refreshTokenController = async(req, res) =>{
    const refreshToken = req.cookies?.refreshToken;

    if(!refreshToken){
        return res.status(401).json({
            message: "Unauthorized, refresh token not found",
        })
    }

    try {
        
        const decode = verifyRefreshToken(refreshToken);
        const user = await userModel.findById(decode.id);

          if(!user || refreshToken !== user.refreshToken) {
              if(user) {
           user.refreshToken = null 
           await user.save();
              }

           return res.status(401).json({
                message: "Unauthorized, refresh token mismatch",
           })
        }

        const {accessToken, refreshToken: newRefreshToken}= generateTokens({userId: user._id});

        res.cookie("refreshToken", newRefreshToken, {httpOnly: true});

        user.refreshToken = newRefreshToken;
        await user.save();

        res.status(200).json({
            message: "Token refreshed successfuly",
            accessToken
        })

    } catch (error) {
        return res.status(401).json({
            message: "Unauthorized. Invalid or expired refresh token",
        })
    }
}