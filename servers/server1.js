var net = require('net');

var server = net.createServer(function(c) { //'connection' listener
    c.write('Hello from server1\n');
    c.on('end', function() {
        console.log('server disconnected');
    });
});
server.listen(5001);