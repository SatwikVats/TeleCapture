import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import cors from 'cors';
import path from 'path';

import botConnector from './config/botConnector';
import connectDB from './config/dbConnector';
import onConnected from './config/webSocketConnector';


const app: Application = express();
const PORT: number = 8000;

app.use(express.json()); // Middleware
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

const server = app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
  console.log('Server is up and running');
  connectDB();
  mongoose.connection.once('open', () => {
    console.log('Connected to DB');
    botConnector();
  })
});

const io = new Server(server);
io.on('connection', onConnected);

export default io;

