import Message from "../model/message.model";

<<<<<<< HEAD
// export const messageHandler = async (req: any, res: any) => {
//     try{
//         const newMessage = 

//     }
//     catch(err){}
// }

export const messageHandler = async (message: any) => {
    try{

        // console.log("message", message);
        // console.log("typeof message", typeof message);

        // console.log("message.chat.id",message.chat.id);
        // console.log("typeof message.chat.id",typeof message.chat.id);
        // console.log("message.from.first_name",message.from.first_name);
        // console.log("typeof message.from.first_name",typeof message.from.first_name);
        // console.log("message.from.last_name",message.from.last_name);
        // console.log("typeof message.from.last_name",typeof message.from.last_name);

        const now = new Date();
        const sentAt = `${now.toDateString()} ${now.getHours()}:${now.getMinutes()}`;
        // console.log("sentAt", sentAt);
=======
export const messageHandler = async (message: any) => {
    try{

        console.log("Inside the message handler");

        const now = new Date();
        const sentAt = `${now.toDateString()} ${now.getHours()}:${now.getMinutes()}`;
>>>>>>> bdfbd00b3d5712a9a94dbcd0ac3ecd76df673039
        
        const messageObject = {
            senderId: message.from.id,
            chatId: message.chat.id.toString(),
            senderFirstName: message.from.first_name,
            senderLastName: message.from.last_name,
<<<<<<< HEAD
            

            chatType: message.chat.title,
            text: message.text,
            chatName: message.chat.title || "",

            sentAt:sentAt, 

=======
            chatType: message.chat.title,
            text: message.text,
            chatName: message.chat.title || "",
            sentAt:sentAt, 
>>>>>>> bdfbd00b3d5712a9a94dbcd0ac3ecd76df673039
        }

        const newMessage = new Message(messageObject);
        const savedMessage = await newMessage.save();

        console.log("savedMessage", savedMessage);
        
<<<<<<< HEAD

=======
>>>>>>> bdfbd00b3d5712a9a94dbcd0ac3ecd76df673039
        if(!savedMessage){
            console.error("Failed to save the message in DB!");
        }

    }
    catch(err){
        console.error(err);
    }
}