import express from 'express';
import jobController from '../controllers/jobs.controller.js';

const router = express.Router();

router.get('/', jobController.getAll);
router.post('/', jobController.filter);
router.get('/:id', jobController.getJobById);

export default router;
