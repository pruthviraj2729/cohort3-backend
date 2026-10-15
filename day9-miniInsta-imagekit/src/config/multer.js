import multer from "multer";

const storage = multer.memoryStorage()

const uploadPosts = multer({storage})

export default uploadPosts