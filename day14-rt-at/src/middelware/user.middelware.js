import userModel from "../model/auth.model.js"
import { verifyAccessToken } from "../utils/auth.js"

const middelware = async(req, res, next) => {
    const accessToken = req.headers.authorization?.split(" ")[ 1 ]

    if(!accessToken) {
        return res.status(401).json({
            message: "Unauthorized,access token not found",
        })
    }

    const decode = verifyAccessToken(accessToken)

    const user = await userModel.findById(decode.id)

    req.user = user;

    next()
}

export default middelware;