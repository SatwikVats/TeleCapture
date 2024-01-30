import connectRedis from "../config/redisConnector";

//create
export const createMessageCache = async (message: any) => {

    try{
        //Data going to cache
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



        // const redisCheck = await redisClient.hLen(`messages:${message.id}`);
        
        // if(redisCheck===0){
        //     await redisClient.hSet(`messages:${message.id}`, message);
        //     await redisClient.disconnect();
        // }
    }
    catch(err){
        console.error(err);
    }

}


export const fetchMessageCache = async () => {
    try{
        //Data going to cache
        
    }
    catch(err){
        console.error(err);
    }

}

//update (in case a message is edited)

//fetch from DB.