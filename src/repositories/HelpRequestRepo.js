import connectToMongo from "../../config/mongoConnect.js";
import HelpRrquest from "../models/helpRequest.js";


class HelpRequestRepo {
    constructor(model) {
        this.model = model;
        connectToMongo();
    }
    async getAll() {
        return this.model.find({}).exec();
    }
    async getById(id) {
        try {
            let item = await this.model.findById(id);
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

    // async getAll(filters) {
    //     try {
    //       let query = {};
    //       if(filters.locations){
    //           query.locations = parseInt(filters.locations);
    //       }
    //       if(filters.statuses){
    //           query.statuses = filters.statuses;
    //       }
    //       if(filters.importances){
    //           query.importances = filters.importances;
    //       }
    //       console.log(query);
    //       const pipeline = [];
    //       pipeline.push();
    //       Object.keys(query).length > 0?pipeline.push({ $match: query }) : pipeline.push({ $match: { statusDescription: "Waiting" }})
    //       const results =  await this.model.aggregate(pipeline).exec();
    //       console.log(results);
    //       return results;
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //       throw error;
    //     }
    //   }
      async update(id, item) {
    try {
        let result = await this.model.findByIdAndUpdate(Number(id), item);
        return result;
    }
    catch (errors) {
        throw new Error('it is not possible to update, please try again');
    }
}

}

export default new HelpRequestRepo(HelpRrquest);