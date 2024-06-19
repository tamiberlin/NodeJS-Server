import express from 'express';
import VolenteersController from '../controllers/VolenteersController.js';

const router = express.Router();

router.get('/', VolenteersController.getAll);
router.get('/:id', VolenteersController.getById);
router.post('/', VolenteersController.add);

export default router;