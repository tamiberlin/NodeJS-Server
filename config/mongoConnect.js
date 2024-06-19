import { configDotenv } from 'dotenv';
import mongoose from 'mongoose';
configDotenv();
mongoose.set("strictQuery", false);
connectToMongo().catch(err => console.log(err));
export default async function connectToMongo() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connect!!');
    }
    catch (error) {
        console.log(error);
        throw new Error("failed to connect to database");
    }

    // const db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'));
    // db.once('open', function () {
    //     console.log('Connected to MongoDB');
    // });

}
