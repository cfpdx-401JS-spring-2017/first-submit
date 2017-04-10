const net = require('net');

//connect to next person in telephone game
const clientConnectedToNextServer = net.createConnection({
  host: '192.168.1.149',
  port: 61000
});

//create our server so we can get request from prior person
const server = net.createServer(connectedClient => {
  //let's deal with strings and not binary
  connectedClient.setEncoding('utf-8');
  
  connectedClient.on('data', data => {
    //add our name to the message
    data += '|Yuval';
    console.log(`My data is ${data}`);
    clientConnectedToNextServer.write(data);
  });
});

server.listen(61000, () => {
  console.log('server running at 61000');
});