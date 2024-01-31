const socket = io()

const clientsTotal = document.getElementById('active-clients');
const tableBody = document.getElementById('table-body');

socket.on('active-clients', (data) => {
    console.log('Number of active clients:', data);
    clientsTotal.innerText = `Total Clients: ${data}`;
})

socket.on('messages', (data) => {
    console.log('Message', data);

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black; padding: 10px;">${data.senderId}</td>
        <td style="border: 1px solid black; padding: 10px;">${data.chatId}</td>
        <td style="border: 1px solid black; padding: 10px;">${data.senderFirstName}</td>
        <td style="border: 1px solid black; padding: 10px;">${data.senderLastName}</td>
        <td style="border: 1px solid black; padding: 10px;">${data.chatType}</td>
        <td style="border: 1px solid black; padding: 10px;">${data.chatName}</td>
        <td style="border: 1px solid black; padding: 10px;">${data.sentAt}</td>
        <td style="border: 1px solid black; padding: 10px;">${data.text}</td>
    </tr>
    `
    
    tableBody.appendChild(newRow);
})







// const newRow = tableBody.insertRow(tableBody.ariaRowSpan.length);
    // const newRow = tableBody.insertRow(tableBody);

    // for(let i=0;i<8;i++){
    //     cells[i] = newRow.insertCell(i);
    // }

    // const dummy_val = "abc";