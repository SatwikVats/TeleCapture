import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {type: String, required: true},
    chatId: {type: String, required: true},
    senderFirstName: {type: String, required: false},
    senderLastName: {type: String, required: false},
    chatName: {type: String},
    // message: {type: Object, required: true},
    text: {type: String, required: false},
    chatType: {type: String, required: false},
    sentAt: {type: String, required: true},
},{
    timestamps: true,
});

const Message = mongoose.model("Message", messageSchema);

export default Message;