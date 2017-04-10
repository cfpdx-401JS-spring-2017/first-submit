const net = require('net');

// create our server so we can get request from prior person
// in the telephone game
const server = net.createServer(connectedClient => {
    // Let's deal with strings and not binary
    connectedClient.setEncoding('utf8');

    connectedClient.on('data', data => {
        console.log('final result is', data);
    });
});

server.listen(61500, () => {
    console.log('server running at', server.address());
});

