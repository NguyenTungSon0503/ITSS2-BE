import express from 'express';
import jobController from '../controllers/jobs.controller.js';

const router = express.Router();

router.get('/', jobController.getAll);
router.post('/', jobController.filter);
router.get('/hust-partner', jobController.getJobWithHustPartnerCompany); // Moved above the /:id route
router.get('/job-title', jobController.getAllJobTitle);
router.get('/job-with-title', jobController.getJobWithTitle);
router.get('/search-with-option', jobController.searchWithOption);
router.get('/:id', jobController.getJobById);

export default router;
