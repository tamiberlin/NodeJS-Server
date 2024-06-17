import express from 'express';
import VolenteersController from '../controllers/VolenteersController.js';

const Router = express.Router();

Router.get('/', VolenteersController.getAll());

export default Router;