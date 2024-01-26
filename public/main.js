const socket = io()

const clientsTotal = document.getElementById('active-clients');

socket.on('active-clients', (data) => {
    console.log('Number of active clients:', data);
    clientsTotal.innerText = `Total Clients: ${data}`;
})