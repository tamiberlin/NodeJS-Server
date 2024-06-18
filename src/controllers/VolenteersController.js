import VolenteerService from "../services/VolenteerService.js";
import BaseController from "./BaseController.js";

class VolenteersController extends BaseController{
    constructor(VolenteerService){
        super(VolenteerService);
        this.name = "volenteer";
    }

    // async getAll(req, res, next){

    //     try {
            
    //     const response = await this.VolenteerService.getAll();
    //     return res.status(200).json(response);
    //     } catch (error) {
    //         next(error);
    //         res.status(500).json({ error: 'An error occurred controller' });
    //     }

    // }
}
export default new VolenteersController(VolenteerService);