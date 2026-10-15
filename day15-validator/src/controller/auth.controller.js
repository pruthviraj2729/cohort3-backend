import userModel from "../model/user.model.js"

export async function register(req, res) {
    const {email, phone, password} = req.body

    const user = await userModel.create({
        email,
        phone,
        password
    })

    return res.json({
        message: "user registered successfully",
        data: {
            email,
            phone,
            id: user._id
        }
    })
}