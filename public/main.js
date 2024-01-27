const socket = io()

const clientsTotal = document.getElementById('active-clients');
const tableBody = document.getElementById('table-body');

socket.on('active-clients', (data) => {
    console.log('Number of active clients:', data);
    clientsTotal.innerText = `Total Clients: ${data}`;
})

socket.on('messages', (data) => {
    console.log('Message', data);
    const newRow = tableBody.insertRow(tableBody.ariaRowSpan.length);

    for(let i=0;i<5;i++){
        cells[i] = newRow.insertCell(i);
    }

    const dummy_val = "abc";

    cells[0].innerHTML = `<input type="text" name="${dummy_val}">`;
    cells[1].innerHTML = `<input type="text" name="${dummy_val}">`;
    cells[2].innerHTML = `<input type="text" name="${dummy_val}">`;
    cells[3].innerHTML = `<input type="text" name="${dummy_val}">`;
    cells[4].innerHTML = `<input type="text" name="${dummy_val}">`;
})