import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


import botConnector from './config/botConnector';
import connectDB from './config/dbConnector';


const app: Application = express();
const PORT: number = 8000;

app.use(express.json()); // Middleware
app.use(cors()); 

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
  console.log('Server is up and running');
  connectDB();
  mongoose.connection.once('open', () => {
    console.log('Connected to DB');
    botConnector();
  })
});