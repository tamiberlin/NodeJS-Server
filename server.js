import { configDotenv } from "dotenv";
import express from 'express';
// import VolenteerRouter from "../src/routes/VolenteerRouter";
import VolenteerRouter from './src/routes/VolenteerRouter.js';


configDotenv();
const server = express();
const hostname = process.env.hostname;
const port = process.env.port;

server.use(express.json());

server.use('/api/volenteers', VolenteerRouter);
server.use('/', (req,res)=>{res.send('welcome... start giving');

});

server.listen(port, hostname, ()=> {console.log('server running at http://${hostname}:${port}/')});