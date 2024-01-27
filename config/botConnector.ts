import telegramBot from 'node-telegram-bot-api';
import dotenv from "dotenv";
import { messageHandler } from '../controller/messageHandler';

dotenv.config();

const botConnector = async () => {
    const token : string = process.env.BOT_TOKEN!;
    const bot = new telegramBot(token, {polling: true});

    console.log("bot", bot);

    bot.on('message',async (message)=>{
        console.log('message received:', message);
        await messageHandler(message);
    });

    return bot;
}

export default botConnector;