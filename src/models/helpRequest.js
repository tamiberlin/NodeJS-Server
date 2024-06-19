import mongoose from "mongoose";
const Schema = mongoose.Schema;

const HelpRequestSchema = new Schema({
    _id:String,
    volenteerCode:Number,
    impotranceCode:Number,
    phoneNumber:String,
    numOfPeople:Number,
    statusCode:Number,
    locationCode:Number
}, {versionKey:false})

const HelpRrquest = mongoose.model("HelpRrquest", HelpRequestSchema, 'helpRequst');
export default HelpRrquest;