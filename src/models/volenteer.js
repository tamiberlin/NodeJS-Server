import { Int32 } from "mongodb";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const VolenteerSchema = new Schema({
    _id:String,
    fullName:String,
    phoneNumber:String,
    locationCode:Number,
    abilities:Array
}, {versionKey:false})

const Volenteer = mongoose.model("Volenteer", VolenteerSchema, 'volenteer');
export default Volenteer;