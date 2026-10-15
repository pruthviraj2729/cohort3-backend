import postModel from "../model/post.model.js";
import { sendFiles } from "../services/storage.services.js";

export const creatPostController = async (req, res) => {
    try {

        const description = req.body.description;
        const file = req.file

        if(!description || !file) return res.status(400).json({
            success:false,
            message: "field are required"
        })

        const uploadImage = await sendFiles(file.buffer, file.originalname)

        const post = await postModel.create({
            description,
            image: uploadImage.url,
        
        })

        console.log(uploadImage)
        return res.status(201).json({
            success:true,
            message: "post created successfullt",
            data:post
            
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
}