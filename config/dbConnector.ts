import mongoose from "mongoose";
import dotenv from "dotenv";
import { fetchMessages } from "../controller/messageHandler";

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI || "", {
        });
        fetchMessages();        
    }
    catch(err){
        console.log(err);
    }
    
}

export default connectDB;