const net = require('net');
const PORT = 61000;

// connect to next person in telephone game
const clientConnectedToNextServer = net.createConnection({
  host: '192.168.1.173',
  port: 61000
});

// create our server so we can get requests from prior in telephone game.
const server = net.createServer(connectedClient => {
  connectedClient.setEncoding('utf8');
  connectedClient.on('data',  data => {
    data += '|Keeley';
    console.log('My data is ', data);

    clientConnectedToNextServer.write(data);
  });
});

server.listen(61000, () => {
  console.log('Server running at ', server.address());
});