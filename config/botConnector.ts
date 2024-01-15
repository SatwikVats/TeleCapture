import telegramBot from 'node-telegram-bot-api';
import dotenv from "dotenv";

dotenv.config();

const botConnector = async () => {
    const token : string = process.env.BOT_TOKEN!;
    const bot = new telegramBot(token, {polling: true});

    bot.on('message',(message)=>{
        console.log('message received:', message);
    });
}

export default botConnector;