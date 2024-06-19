import connectToMongo from "../../config/mongoConnect.js";
import Volenteer from "../models/volenteer.js";



class VolenteerRepo {
    constructor(Volenteer) {
        this.Volenteer = Volenteer;
        connectToMongo();
    }


    async getAll() {
        return this.Volenteer.find({}).exec();
    }


    async getById(id) {
        try {
            let item = await this.Volenteer.findById(id);
            if (!item) {
                let error = new Error('There is no data for this request');
                error.code = 404;
                throw error;
            }
            return item;
        }
        catch (errors) {
            throw (errors);
        }
    }


    async add(item) {
        try {
            let vol = await this.model.create(item);
            console.log(vol);
            return vol;
        }
        catch (errors) {
            throw (errors);
        }
    }


    // async getAll(filters) {
    //     const smallpipe = filterByParams(filters);
    //     const bigpipe = pipeline(smallpipe);
    //     let fullrequest = await this.model.aggregate(bigpipe).exec();
    //     console.log(fullrequest);
    //     return fullrequest;
    // }
}


export default new VolenteerRepo(Volenteer);