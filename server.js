const net = require('net');

const clientConnectedToNextServer = net.createConnection({
  host: '192.168.1.163',
  port: 61000
});

const server = net.createServer(connectedClient => {

  connectedClient.setEncoding('utf8');

  connectedClient.on('data', data => {
    data += '|Nicky';
    console.log('my data is', data);
    clientConnectedToNextServer.write(data);
  });
});

server.listen(61000, () => {
  console.log(`server is up at`, server.address());
});