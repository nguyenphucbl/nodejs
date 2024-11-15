import express from 'express';
import CartController from '../app/controllers/CartController.js';
const routeCart = express.Router();
routeCart.get('/', CartController.show);
export default routeCart;
