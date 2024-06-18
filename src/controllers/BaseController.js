import autoBind from "auto-bind";
class BaseController{
    constructor(service){
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next){
        try {
            const filters = req.query;
            const response = await this.service.getAll(filters);
            return res.status(200).json(response);
        }
        catch (e) {
            console.log('error in base controller')
            next(e);
        }
    }
}
export default BaseController;