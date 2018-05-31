var net = require('net');

const PORTS =  [5001,5002,5003];

net.createServer(function (server) {
let port = 0;
    server.on('data', function(data){
        port = randomPort()
        net.connect({port: port, host: '127.0.0.1'}, function(){
            console.log('message in load balancer ' + port );
            this.write(data);
        });
    })
}).listen(5000);

function randomPort () {
    return PORTS[Math.floor((Math.random() * 3))];
}

