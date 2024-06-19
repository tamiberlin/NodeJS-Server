import { configDotenv } from "dotenv";
import dotenv from 'dotenv';
import express from 'express';

import VolenteerRouter from './src/routes/VolenteerRouter.js';
import helpRequestRouter from "./src/routes/HelpRequestRouter.js";
const app = express();
configDotenv();
const server = express();
const hostname = process.env.hostname || 'localhost';
const port = process.env.port;


server.use(express.json());

server.use('/api/volenteers', VolenteerRouter);
server.use('/api/helpRequests', helpRequestRouter);
server.use('/', (req,res)=>{res.send('welcome... start giving');
});

server.listen(port, hostname, ()=> {console.log(`server running at http://${hostname}:${port}/`)});