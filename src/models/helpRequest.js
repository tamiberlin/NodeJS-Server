import mongoose from "mongoose";
const Schema = mongoose.Schema;

const HelpRequestSchema = new Schema({
    _id:Number,
    volenteerCode:Number,
    impotranceCode:Number,
    phoneNumber:String,
    numOfPeople:Number,
    statusCode:Number,
    locationCode:Number
}, {versionKey:false})

const HelpRrquest = mongoose.model("helprequests", HelpRequestSchema, "helprequests");
export default HelpRrquest;