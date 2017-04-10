const net = require('net');

// conect to the next person in telephone game
const clientConnectedToNextnextServer = net.createConnection({
    host: '192.168.1.105',
    port: 61500
});

//create our server so we can get request form prior person
//in the telephone game
const server = net.createServer(connectedClient => {
    //Let's deal with strings and not binary
    connectedClient.setEncoding('utf8');
    connectedClient.on('data', data => {
        //add our name to the message
        data += data + '|Martin';
        console.log('my data is', data)
        clientConnectedToNextnextServer.write(data);
    });
});

server.listen(61000, () => {
    console.log('server running at', server.address())
});