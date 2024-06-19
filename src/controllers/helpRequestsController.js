import HelpRequestService from "../services/HelpRequestService.js";
import BaseController from "./BaseController.js";

class HelpRequestsController extends BaseController{
    constructor(HelpRequestService){
        super(HelpRequestService);
        this.name = "HelpRequest";
    }
    
}
export default new HelpRequestsController(HelpRequestService);