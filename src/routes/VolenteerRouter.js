import express from 'express';
import VolenteersController from '../controllers/VolenteersController.js';

const Router = express.Router();

Router.get('/', async(req, res)=>{
    try{
        const volenteer = await VolenteersController.getAll();
        res.json(volenteer);
    }
    catch(error){
        res.status(500).json({error: 'An error occurred'});
        console.log(error);
    }
});

export default Router;