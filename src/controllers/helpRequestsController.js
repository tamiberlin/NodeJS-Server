import model from "../services/HelpRequestService.js";
import BaseController from "./BaseController.js";

class HelpRequestsController extends BaseController{
    constructor(model){
        super(model);
        // this.name = "HelpRequest";
    }
    
    async update(req, res, next) {
        const  id = req.params;
        try {
            const response = await this.model.update(id, req.body);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
export default new HelpRequestsController(model);



