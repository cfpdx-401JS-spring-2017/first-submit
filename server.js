const net = require('net');

//connect to next person in telephone game
const clientConnectedToNextServer = net.createConnection({
    host: '192.168.1.172',
    port: 61000
});

// created server to handle request from previous person in games
const server = net.createServer(connectedClient => {
    connectedClient.setEncoding('utf8');
    connectedClient.on('data', data => {
        //add our name to the message
        data = data + '|Chris';
        console.log('my data is ', data);
        clientConnectedToNextServer.write(data);
    });
});

server.listen(61000);