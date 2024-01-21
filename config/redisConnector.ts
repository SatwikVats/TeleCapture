import {createClient} from 'redis';
import dotenv from "dotenv";

dotenv.config();

const connectRedis = async () => {

    let client;

    // Default host 127.0.0.1 and port 6379 otherwise.
    client = createClient();
    
    client.on('error', (error: any) => {
    console.error('Redis connection error:', error);
    });
    client.on('end', () => {
    console.log('Connection to Redis closed');
    });

    await client.connect();
    return client;

}

export default connectRedis;