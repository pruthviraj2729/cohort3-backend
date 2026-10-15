import jwt from "jsonwebtoken";
import userModel from "../model/user.model.js";

const userMiddelware = async(req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({
            success: false,
            message: "Token is required"
        });
    }

        const data = jwt.verify(token, process.env.JWT_SECRET); 

        const user = await userModel.findById(data.id);

        req.user = user;

        next();
}

export default userMiddelware;