import VolenteerRepo from "../repositories/VolenteerRepo.js";
import BaseService from "./BaseService.js";
class VolenteerService extends BaseService{
    constructor(VolenteerRepo){
        super(VolenteerRepo);
    }

    async getAll(){
        let volenteer = await this.VolenteerRepo.getAll();
        return volenteer;
    }
}
export default new VolenteerService(VolenteerRepo);