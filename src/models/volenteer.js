import mongoose from "mongoose";
const Schema = mongoose.Schema;

const VolenteerSchema = new Schema({
    _id:Number,
    fullName:String,
    phoneNumber:String,
    locationCode:Number,
    abilities:Array
}, {versionKey:false})

const Volenteer = mongoose.model("volenteers", VolenteerSchema, "volenteers");
export default Volenteer;


