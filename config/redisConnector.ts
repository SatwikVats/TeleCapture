import {createClient} from 'redis';
import dotenv from "dotenv";

dotenv.config();

const connectRedis = async () => {

<<<<<<< HEAD

=======
>>>>>>> bdfbd00b3d5712a9a94dbcd0ac3ecd76df673039
    const isDocker = process.env.DOCKER === 'true'? true: false;
    let client;

    if(isDocker){
        //Updating the host incase server is running inside a Docker conatiner.
        client = createClient({url: "redis://@redis-telecapture:6379"});
    }
    else{
        // Default host 127.0.0.1 and port 6379 otherwise.
        client = createClient();
    }

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