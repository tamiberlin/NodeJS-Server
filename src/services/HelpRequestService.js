import HelpRequestRepo from "../repositories/HelpRequestRepo.js";
import BaseService from "./BaseService.js";
class HelpRequestService extends BaseService{
    constructor(HelpRequestRepo){
        super(HelpRequestRepo);
    }

    async add(data){
        return await this.HelpRequestRepo.add(data);
    }
    async update(id, data){
        return await this.HelpRequestRepo.update(id, data); 
    }
}
export default new HelpRequestService(HelpRequestRepo);