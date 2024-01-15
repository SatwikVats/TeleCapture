import telegramBot from 'node-telegram-bot-api';

const botConnector = async () => {
    const token = '6921919649:AAGistqbmTDwe252S3hcnSUqOB3XdVA08Vs';
    const bot = new telegramBot(token, {polling: true});

    bot.on('message',(message)=>{
        console.log('message received:', message);
    });
}

export default botConnector;