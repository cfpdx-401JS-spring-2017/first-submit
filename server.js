const net = require('net');

// connect to next person in telephone game
const clientConnectedToNextServer = net.createConnection({
    host: '192.168.1.151', // forward to next server
    port: 61000
});

clientConnectedToNextServer.write('Marty');

// // create our server so we can get request from prior person
// // in the telephone game
// const server = net.createServer(connectedClient => {
//     // Let's deal with strings and not binary
//     connectedClient.setEncoding('utf8');

//     connectedClient.on('data', data => {
//         // add our name to the message
//         data += '|Marty';
//         console.log('my data is', data);
//     });
// });

// server.listen(61000, () => {
//     console.log('server running at', server.address());
// });