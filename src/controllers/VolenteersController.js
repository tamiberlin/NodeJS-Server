// import model from "../services/VolenteerService.js";
import model from "../services/VolenteerService.js";
import BaseController from "./BaseController.js";

console.log('Model imported:', model); // Add this line

class VolenteersController extends BaseController{
    constructor(model){
        super(model);
        // this.name = "volenteer";
    }

    
    // async add(req, res, next) {
    //     try {
    //         console.log('req.body:', req.body); // debugging line
    //         const response = await this.model.add(req.body);
    //         return res.status(200).json(response);
    //     }
    //     catch (e) {
    //         next(e);
    //     }
    // }

    async add(req, res) {
        try {
            let data = req.body; // Assuming the data comes from the request body
            console.log('data:', data); // debugging line
            let response = await this.model.add(data);
            console.log(`Volunteer added: ${response.fullName}`);
            return res.status(201).json(response);
        } catch (error) {
            res.status(400).send({ error: error.message });
            console.log("theres an error adding volunteer: ", error.message);
        }
    }

}
export default new VolenteersController(model);