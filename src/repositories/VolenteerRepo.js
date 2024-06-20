import connectToMongo from "../../config/mongoConnect.js";
import model from "../models/volenteer.js";
import { byId } from "../files/filter.js";

class VolenteerRepo {
    constructor(model) {
        this.model = model;
        connectToMongo();
    }

    async getAll() {
        return this.model.find({}).exec();
    }
    async getById(id) {
        try {
            
            const smallPipe = byId(id);
            console.log('smallpipe:', smallPipe); // debugging line
            let req = await this.model.aggregate(smallPipe).exec(); 
            console.log('req:', req); // debugging line
            return req;
        } catch (errors) {
            throw errors;
        }
    }
    async add(data) {
        try {
            let vol = await this.model.create(data);
            // this.model.add(vol);
            console.log('voll:', vol); // debugging line
            return vol;
        }
        catch (errors) {
            throw (errors);
        }
    }

}


export default new VolenteerRepo(model);