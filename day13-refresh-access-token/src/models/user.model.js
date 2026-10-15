import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        matchMedia: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    passwordHash: {
        type: String,
        required: true,
        minLength: 3,
    }
});

const userModel = mongoose.model('user', userSchema);

export default userModel;