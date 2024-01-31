import connectRedis from "../config/redisConnector";

export const createMessageCache = async (message: any) => {

    try{
        //Data storing in cache
        const redisClient = await connectRedis();
        
        await redisClient.rPush('messageQueue', message.id);
        await redisClient.hSet(`messages:${message.id}`, message);
        await redisClient.sAdd('messageSet', message.id);

        var queueLength = await redisClient.LLEN('messageQueue');

        while(queueLength>100){
            const head = await redisClient.LPOP('messageQueue');
            if(head){
                const keys = await redisClient.hKeys(`messages:${head}`);
                keys.forEach(async (key) => {
                    await redisClient.hDel(`messages:${head}`, key);
                })
                await redisClient.sRem('messageSet', head);
            }
            queueLength--;
        };

        await redisClient.disconnect();

    }
    catch(err){
        console.error(err);
    }
}


export const fetchMessageCache = async () => {
    try{
        //Retrieving message from cache
        const redisClient = await connectRedis();
        var  messages = [];

        const queueLength = await redisClient.lLen('messageQueue');
        var i = 0;
        while(i<queueLength){
            const messageId = await redisClient.lIndex('messageQueue', i);
            const message = await redisClient.hGetAll(`messages:${messageId}`);
            messages.push(message);
            i++; 
        }

        console.log("No of messages found in cache:", queueLength);
        
        await redisClient.disconnect();
        return messages;        
    }
    catch(err){
        console.error(err);
        return null;
    }
}