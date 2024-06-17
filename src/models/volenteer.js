import mongoose from "mongoose";
const Schema = mongoose.Schema;

const VolenteerSchema = new Schema({
    _id:String,
    fullName:String,
    phoneNumber:String,
    address:Object,
    abilities:Array
}, {versionKey:false})

const Volenteer = mongoose.model("Volenteer", VolenteerSchema, 'volenteer');
export default Volenteer;