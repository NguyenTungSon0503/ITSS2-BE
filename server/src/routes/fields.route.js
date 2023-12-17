import express from 'express';
import fieldController from '../controllers/fields.controller.js';

const router = express.Router();

router.get('/', fieldController.getAll);

export default router;
