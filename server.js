const net = require('net');

const clientConnectedToNextServer = net.createConnection({
    host: '192.168.1.169',
    port: 61000
});

const server = net.createServer(connectedClient => {
    connectedClient.setEncoding('utf8');
    connectedClient.on('data', data => {
        data = data + '|Morgan';
        console.log('my data is', data);
        clientConnectedToNextServer.write(data);
    });
});

server.listen(61000, () => {
  console.log('server running at', server.address());
});