import express from 'express';
import MeController from '../app/controllers/MeController.js';
const routeMe = express.Router();
routeMe.get('/stored/courses', MeController.storedCourses);
routeMe.get('/trash/courses', MeController.trashCourses);
routeMe.get('/stored/news', MeController.storedNews);

export default routeMe;
