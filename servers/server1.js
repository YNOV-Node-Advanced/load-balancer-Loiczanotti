
// var http = require('http');
// const express = require("express");
// const app = express();
//
// app.get("/", (req, res) => {
//    console.log('hello from server1\'\r\n');
// });
// var server = http.createServer(app);
// app.listen(5001);
var net = require('net');

var server = net.createServer(function(c) { //'connection' listener
    console.log('server connected');
    console.log('hello from server1\n');
    c.on('end', function() {
        console.log('server disconnected');
    });
});
server.listen(5001);