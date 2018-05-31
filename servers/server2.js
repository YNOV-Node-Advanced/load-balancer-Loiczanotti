var net = require('net');

var server = net.createServer(function(c) { //'connection' listener
    console.log('server connected');
    console.log('hello from server2\n');
    c.on('end', function() {
        console.log('server disconnected');
    });
});
server.listen(5002);