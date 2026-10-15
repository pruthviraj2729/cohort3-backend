const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.loadEnvFile.mongodb_uri);
        console.log(" mongo db connected")
    } catch (error) {
        console.log("error while connceting db", error)
    }
}

module.exports = connectDB