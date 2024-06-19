import connectToMongo from "../../config/mongoConnect.js";
import HelpRrquest from "../models/helpRequest.js";
// import pipeline from "../utils/pipeline.js";
// import { filterByParams, filterbyId } from "../utils/filters.js";

class HelpRequestRepo {
    constructor(model) {
        this.model = model;
        connectToMongo();
    }

    async getAll(filters) {
        try {
            const ourPipeline = [ ]
            let query = {};
            if (filters.locations) {
                query.locations = parseInt(filters.locations);
            }
            if (filters.statuses) {
                query.statuses = filters.statuses;
            }
            if (filters.importances) {
                query.importances = filters.importances;
            }
            console.log(query);
            if (Object.keys(query).length > 0) {
                ourPipeline.unshift({ $match: query });
            } else {
                ourPipeline.push({ $match: { statuses: "waiting" } }, { $match: query });

            }
            const pipeline = [];
                Object.keys(query).length > 0 ? pipeline.push({ $match: query }) : pipeline.push({ $match: { status: "W" } })
                ourPipeline.push(pipeline);
                const results = await this.model.aggregate(ourPipeline).exec();
                console.log(results);
                return results;
              } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
              }
            }
          






    async getById(id) {
    try {
        let item = await this.model.findById(Number(id));
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