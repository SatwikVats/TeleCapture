import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    messageId: {type: String, required: true}, 
    senderId: {type: String, required: true},
    chatID: {type: String, required: true},
    message: {type: Object, required: true},
},{
    timestamps: true,
});

const Message = mongoose.model("Message", messageSchema);

export default Message;