import io from "..";

let socketsConnected = new Set();

const onConnected = (socket: any) => {
        console.log("socket.id", socket.id);
        socketsConnected.add(socket.id);

        io.emit('active-clients', socketsConnected.size);

        socket.on('disconnect', () => {
                console.log("Socket disconnected:", socket.id);
                socketsConnected.delete(socket.id);
                io.emit('active-clients', socketsConnected.size);
        });
}

export default onConnected;