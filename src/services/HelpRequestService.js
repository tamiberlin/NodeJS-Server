import HelpRequestRepo from "../repositories/HelpRequestRepo.js";
import BaseService from "./BaseService.js";

class HelpRequestService extends BaseService{
    constructor(HelpRequestRepo){
        super(HelpRequestRepo);
    }

    // async add(data){
    //     return await this.HelpRequestRepo.add(data);
    // }

    async update(id, data){
        try{
            return await this.HelpRequestRepo.update(id, data);  
        }
        catch(errors){
            throw new Error("couldnt update request")
        }
        
    }
}
export default new HelpRequestService(HelpRequestRepo);