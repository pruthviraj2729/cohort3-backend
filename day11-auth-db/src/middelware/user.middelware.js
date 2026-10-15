import dotenv from "dotenv";
import userModel from '../model/user.model.js'
import jwt from "jsonwebtoken";

dotenv.config();

const userMiddleware = async(req, res, next) => {
    // Middleware logic here
    const token = req.headers.authorization ;

    if(!token) {
        return res.status(401).json({
            success: false,
            message: "Token is required"
        });
    }

    const data = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(data.id)

    req.user = user; 


    next();
};

export default userMiddleware;