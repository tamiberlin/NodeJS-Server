import VolenteerRepo from "../repositories/VolenteerRepo.js";
import BaseService from "./BaseService.js";


class VolenteerService extends BaseService{
    constructor(VolenteerRepo){
        super(VolenteerRepo);
    }

    async add(data){
    return await this.VolenteerRepo.add(data);
    }
}

export default new VolenteerService(VolenteerRepo);