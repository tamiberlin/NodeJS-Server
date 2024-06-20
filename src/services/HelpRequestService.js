import model from "../repositories/HelpRequestRepo.js";
import BaseService from "./BaseService.js";

class HelpRequestService extends BaseService{
    constructor(model){
        super(model);
    }

    async add(data){
        return await this.model.add(data);
    }

    async update(id, data){
        try{
            return await this.model.update(id, data);  
        }
        catch(errors){
            throw new Error("couldnt update request")
        }
        
    }
}
export default new HelpRequestService(model);