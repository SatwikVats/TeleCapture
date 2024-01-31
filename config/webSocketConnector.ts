import io from "..";
import { fetchMessages } from "../controller/messageHandler";

let socketsConnected = new Set();

const onConnected = async (socket: any) => {
        try{
                console.log("socket.id", socket.id);
                socketsConnected.add(socket.id);

                io.emit('active-clients', socketsConnected.size);

                await fetchMessages();

                socket.join('already initialized');

                socket.on('disconnect', () => {
                        console.log("Socket disconnected:", socket.id);
                        socketsConnected.delete(socket.id);
                        io.emit('active-clients', socketsConnected.size);
                });

        }
        catch(err){
                console.error(`Error setting up the websocket:${err}`);
        }
        
}

export default onConnected;