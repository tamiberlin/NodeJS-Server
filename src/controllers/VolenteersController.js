import VolenteerService from "../services/VolenteerService.js";
import BaseController from "./BaseController.js";

class VolenteerController extends BaseController{
    constructor(VolenteerService){
        super(VolenteerService);
        this.name = "volenteer";
    }

    async getAll(req, res, next){
        const response = await this.VolenteerService.getAll();
        return res.status(200).json(response);
    }
}
export default new VolenteerController(VolenteerService);