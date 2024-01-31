import io from "..";
import Message from "../model/message.model";
import { createMessageCache, fetchMessageCache } from "./messageCacheManager";

export const messageHandler = async (message: any) => {
    try{

        console.log("Inside the message handler");

        const now = new Date();
        const sentAt = `${now.toDateString()} ${now.getHours()}:${now.getMinutes()}`;
        
        const messageObject = {
            senderId: message.from.id,
            chatId: message.chat.id.toString(),
            senderFirstName: message.from.first_name,
            senderLastName: message.from.last_name,
            chatType: message.chat.title,
            text: message.text,
            chatName: message.chat.title || "",
            sentAt:sentAt, 
        }

        const newMessage = new Message(messageObject);
        const savedMessage = await newMessage.save();

        console.log("savedMessage", savedMessage);
        const messageObjectToBeCached = {...messageObject, id: savedMessage._id.toString()};
        await createMessageCache(messageObjectToBeCached);


        io.emit('messages', messageObject);

        console.log("savedMessage", savedMessage);
        
        if(!savedMessage){
            console.error("Failed to save the message in DB!");
        }

    }
    catch(err){
        console.error(err);
    }
}


export const fetchMessages = async() => {
    try{
        console.log("Inside fetchMessages");
        console.log("Attempt fetching messages from cache");

        let result;
        let isCacheUpdateRequired = false;

        result = await fetchMessageCache();
        if(result && result.length === 0)   isCacheUpdateRequired = true;

        if(result === null || result.length === 0){
            console.log("Attempt fetching messages from Db; couldn't retrieve from cache");
            result = await Message.find().sort({'timestamp': -1}).limit(100);
        }


        // result = await Message.find();
        console.log("result from Cache or DB:", result);

        if(result){
            result.forEach(async (message) => {
                const messageObject = {
                    senderId: message.senderId,
                    chatId: message.chatId,
                    senderFirstName: message.senderFirstName,
                    senderLastName: message.senderLastName,
                    chatType: message.chatType,
                    chatName: message.chatName || "",
                    sentAt:message.sentAt,
                    text: message.text,  
                }
                io.emit('messages', messageObject);

                if(isCacheUpdateRequired){
                    const messageObjectToBeCached = {...messageObject, id: message._id.toString()};
                    await createMessageCache(messageObjectToBeCached);
                }
            });
        }        
    }
    catch(err){
        console.error(err);
    }
}