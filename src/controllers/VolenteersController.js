import VolenteerService from "../services/VolenteerService.js";
import BaseController from "./BaseController.js";

class VolenteersController extends BaseController{
    constructor(VolenteerService){
        super(VolenteerService);
        this.name = "volenteer";
    }

}
export default new VolenteersController(VolenteerService);