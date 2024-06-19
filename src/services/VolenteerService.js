import VolenteerRepo from "../repositories/VolenteerRepo.js";
import BaseService from "./BaseService.js";
class VolenteerService extends BaseService{
    constructor(VolenteerRepo){
        super(VolenteerRepo);
    }
}
export default new VolenteerService(VolenteerRepo);