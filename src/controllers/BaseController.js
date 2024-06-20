import autoBind from "auto-bind";
class BaseController {
    constructor(model) {
        this.model = model;
        autoBind(this);
    }

    async getAll(req, res, next) {
        try {
            const filters = req.query;
            const response = await this.model.getAll(filters);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
    async getById(req, res, next) {
        const id = req.params.id;
        try {
            const response = await this.model.getById(id);
            return res.status(200).json(response);

        }
        catch (e) {
            next(e);
        }
    }

}
export default BaseController;