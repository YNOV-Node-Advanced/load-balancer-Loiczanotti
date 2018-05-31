var net = require('net');

var server = net.createServer(function(c) {
    console.log('server connected');
    console.log('hello from server3\n');
    c.on('end', function() {
        console.log('server disconnected');
    });
});
server.listen(5003);