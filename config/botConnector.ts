import telegramBot from 'node-telegram-bot-api';
import dotenv from "dotenv";
import { messageHandler } from '../controller/messageHandler';

dotenv.config();

const botConnector = async () => {
    try{
        const token : string = process.env.BOT_TOKEN!;
        const bot = new telegramBot(token, {polling: true});

        if(bot){
            console.log("Connected to bot!");
        }

        bot.on('message',async (message)=>{
            console.log('message received:', message);
            await messageHandler(message);
        });

        return bot;
    }
    catch(err){
        console.error("Error connecting to Bot");
    }
    
}

export default botConnector;