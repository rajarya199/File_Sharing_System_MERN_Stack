import express from 'express';
import { uploadImage } from '../controllers/image-controller.js';
const router= express.Router();
import upload from '../utils/upload.js';
// router.method('/path',middleware,callback fn)
router.post('/upload',upload.single('file'),uploadImage)
router.get('/file/:fileId',downloadImage)
export default router;