const { default: mongoose } = require("mongoose")

const dbConnect = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI environment variable is required");
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log(" mongo db connected")
    } catch (error) {
        console.log('error while connecting db', error)
    }
}

module.exports = dbConnect
