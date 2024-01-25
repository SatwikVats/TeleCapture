import Message from "../model/message.model";

export const messageHandler = async (message: any) => {
    try{

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
        
        if(!savedMessage){
            console.error("Failed to save the message in DB!");
        }

    }
    catch(err){
        console.error(err);
    }
}