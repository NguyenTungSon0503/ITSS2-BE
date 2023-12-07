import express from 'express';
import jobController from '../controllers/JobController.controller.js';

const router = express.Router();

router.get('/', jobController.getAll);
router.post('/', jobController.create);
router.get('/:id', jobController.getById);
router.delete('/:id', jobController.delete);
router.patch('/:id', jobController.update);

export default router
