import autoBind from "auto-bind";
class BaseController{
    constructor(service){
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next){
        const response = this.service.getAll();
        return res.status(200).json(response);
    }
}
export default BaseController;