'use strict';

const net = require('net');
let sockets = [];
let i = 1;

let server = net.createServer((socket) => {
    socket.id = i++;
    sockets.push(socket);
    console.log(`A user has been logged to the server`);

    socket.on('data', (data) => {
        let currentSocketId = socket.id;
        sockets.forEach(s => {
            s === socket ?
                console.log(`User ${s.id}: ` + data.toString()) :
                s.write(`User ${currentSocketId}: ${data}`);
        });
    });

    socket.on('end', () => {
        let j = sockets.indexOf(socket);
        sockets.splice(j, 1);
        console.log(`A user ${socket.id}, has left the server`);
    });

});

server.listen(8001);

module.exports = server;