import express from 'express';
import { uploadImage } from '../controllers/image-controller.js';
const router= express.Router();

// router.method('/path',middleware,callback fn)
router.post('/upload',uploadImage)
export default router;