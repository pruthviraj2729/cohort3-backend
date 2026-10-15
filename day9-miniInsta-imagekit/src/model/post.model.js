import mongoose from "mongoose"

const Posts = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
},{timestamps:true})

const postModel = mongoose.model('image', Posts)

export default postModel