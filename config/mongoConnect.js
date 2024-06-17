// const mongoose = require('mongoose');
import mongoose from 'mongoose';
connectToMongo().catch(err => console.log(err));
export default async function connectToMongo() {
//the connect function of mongoose get the connection string to local or remote db
await mongoose.connect(
'mongodb+srv://volenteer:v123456@cluster0.rolztbj.mongodb.net/');
console.log('connect!!')
}