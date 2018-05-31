var net = require('net');


var client = net.connect({port: 5000, host: '127.0.0.1'}, function() { //'connect' listener
    client.write('world!\r\n');
});
