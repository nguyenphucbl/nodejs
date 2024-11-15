import express from 'express';
import CourseController from '../app/controllers/CourseController.js';
const router = express.Router();
router.get('/create', CourseController.create);
router.post('/store', CourseController.store);
router.get('/:id/edit', CourseController.edit);
router.put('/:id/', CourseController.update);
router.get('/:slug', CourseController.show);
export default router;
