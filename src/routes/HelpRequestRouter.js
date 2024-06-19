import express from 'express';
import helpRequestsController from '../controllers/helpRequestsController.js';

const router = express.Router();

router.get('/', helpRequestsController.getAll);
router.get('/:id', helpRequestsController.getById);
router.put('/:id', helpRequestsController.update);


export default router;