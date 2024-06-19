import HelpRequestService from "../services/HelpRequestService.js";
import BaseController from "./BaseController.js";

class HelpRequestsController extends BaseController{
    constructor(HelpRequestService){
        super(HelpRequestService);
        // this.name = "HelpRequest";
    }
    
    async update(req, res, next) {
        const  id = req.params;
        try {
            const response = await this.service.update(id, req.body);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
export default new HelpRequestsController(HelpRequestService);



