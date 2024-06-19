import HelpRequestRepo from "../repositories/HelpRequestRepo.js";
import BaseService from "./BaseService.js";
class HelpRequestService extends BaseService{
    constructor(HelpRequestRepo){
        super(HelpRequestRepo);
    }

    // async getAll(){
    //     let volenteer = await this.VolenteerRepo.getAll();
    //     return volenteer;
    // }
}
export default new HelpRequestService(HelpRequestRepo);