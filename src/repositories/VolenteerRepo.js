import connectToMongo from "../../config/mongoConnect.js";
import Volenteer from "../models/volenteer.js";

class VolenteerRepo{
    constructor(model){
        this.model = model;
        connectToMongo();
    }

    async getAll(){
        let volenteer = await this.model.find({}).exec();
        console.log(volenteer);
        return volenteer;
    }
}

export default new VolenteerRepo(Volenteer);