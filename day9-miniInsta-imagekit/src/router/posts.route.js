import express from 'express'
import { creatPostController } from '../controllers/posts.controllers.js';
import uploadPosts from '../config/multer.js';

const router = express.Router();

router.post('/create', uploadPosts.single('image') ,creatPostController)


export default router