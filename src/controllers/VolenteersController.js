import VolenteerService from "../services/VolenteerService.js";
import BaseController from "./BaseController.js";

class VolenteersController extends BaseController{
    constructor(VolenteerService){
        super(VolenteerService);
        // this.name = "volenteer";
    }
    async add(req, res, next) {
        try {
            const response = await this.VolenteerService.add(req.body);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }

}
export default new VolenteersController(VolenteerService);