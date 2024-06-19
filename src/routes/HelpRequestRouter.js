import express from 'express';
import helpRequestsController from '../controllers/helpRequestsController.js';

const router = express.Router();

router.get('/', helpRequestsController.getAll);
router.get('/:id', helpRequestsController.getById)

//  async(req, res)=>{
    // try{
//         const volenteer = await VolenteersController.getAll();
//         res.json(volenteer);
    // }
    // catch(error){
        // res.status(500).json({error: 'An error occurred'});
        // console.log(error);
    // }
// });

export default router;