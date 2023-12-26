import express from 'express';
import applyController from '../controllers/apply_cv.controller.js';
import upload from '../utils/multer.js';

const router = express.Router();

router.post('/', upload.single('file'), applyController.create);
router.get('/:userId', applyController.getApplyJobs);

export default router
