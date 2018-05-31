var net = require('net');
// const app = express();
// app.get("/", (req, res) => {
//     console.log('hello from server3\'\r\n');
// });
//
// var server = net.createServer(app);


var server = net.createServer(function(c) { //'connection' listener
    console.log('server connected');
    console.log('hello from server3\n');
    c.on('end', function() {
        console.log('server disconnected');
    });
});
server.listen(5003);