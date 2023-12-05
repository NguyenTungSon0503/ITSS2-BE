import express from 'express';
import companyController from '../controllers/companies.controller.js';

const router = express.Router();

router.get('/', companyController.getAll);
router.post('/', companyController.create);
router.get('/:id', companyController.getCompanyById);
router.delete('/:id', companyController.delete);
router.patch('/:id', companyController.update);

export default router;
