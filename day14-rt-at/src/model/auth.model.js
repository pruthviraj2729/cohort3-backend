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
        matchMedia: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true,
        minLength: 3,
    },
    refreshToken: {
        type: String,
        default: null
    }
});

const userModel = mongoose.model('user', userSchema);

export default userModel;