import connectToMongo from "../../config/mongoConnect.js";
import Volenteer from "../models/volenteer.js";
// import pipeline from "../utils/pipeline.js";
// import { filterByParams, filterbyId } from "../utils/filters.js";

class VolenteerRepo{
    constructor(model){
        this.model = model;
        connectToMongo();
    }


    
//     async getAll(filters){
//         const smallpipe = filterByParams(filters);
//         const bigpipe = pipeline(smallpipe);
//         let fullrequest = await this.model.aggregate(bigpipe).exec();
//         console.log(fullrequest);
//         return fullrequest;
//     }

//     async getById(id){
//         try{
//             const smallPipe = filterbyId(id);
//             const bigpipe = pipeline(smallPipe);
//             let request = await this.model.aggregate(bigpipe).exec();
//             return request;
//         }
//         catch(error){
//             console.log(error)
//             throw new Error('An error occurred while retrieving the request. Please try again later');
//         }
//     }
}

export default new VolenteerRepo(Volenteer);