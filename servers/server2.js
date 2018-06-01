var net = require('net');

var server = net.createServer(function(c) { //'connection' listener
    c.write('Hello from server2\n');
    c.on('end', function() {
        c.write('server disconnected');
    });
});
server.listen(5002);