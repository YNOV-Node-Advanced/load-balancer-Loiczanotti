var net = require('net');

var server = net.createServer(function(c) {
    c.write('Hello from server3\n');
    c.on('close', function() {
        console.log('server disconnected');
    });
});
server.listen(5003);