import mongoose from "mongoose"

const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo db is connected")
    } catch (error) {
        console.log("error in dbConnect", error)
    }
}

export default dbConnect