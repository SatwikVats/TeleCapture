import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {type: String, required: true},
    chatId: {type: String, required: true},
    senderFirstName: {type: String, required: true},
    senderLastName: {type: String, required: true},
    chatName: {type: String},
    // message: {type: Object, required: true},
    text: {type: String, required: true},
    chatType: {type: String, required: true},
    sentAt: {type: String, required: true},
},{
    timestamps: true,
});

const Message = mongoose.model("Message", messageSchema);

export default Message;