import model from "../repositories/VolenteerRepo.js";
import BaseService from "./BaseService.js";

console.log('Model imported:', model); // debug line

class VolenteerService extends BaseService{
    constructor(model){
        super(model);
    }

    async add(data){
    return await this.model.add(data);
    }
}

export default new VolenteerService(model);