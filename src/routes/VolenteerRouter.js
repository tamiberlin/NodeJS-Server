import express from 'express';
import VolenteersController from '../controllers/VolenteersController.js';

const router = express.Router();

router.get('/', VolenteersController.getAll);


export default router;