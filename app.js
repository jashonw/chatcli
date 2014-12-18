/*
 Created by Jashon Wan
 */
var express = require('express')
    , path = require('path')
    , app = express()
    , server = require('http').createServer(app)
    , io = require('socket.io').listen(server)
    , fs = require("fs")
    , readLine = require("readline");

//set log level
io.set('log level', 1);


//express base config
app.configure(function () {
    app.set('port', process.env.PORT || 31000);
    app.set('views', __dirname + '/views');
    app.set('scripts', __dirname + '/scripts');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

// set client file of websocket
app.get('/muc', function (req, res) {
    res.sendfile('views/muctest.html');
});

app.get('/chatcli', function (req, res) {
    res.sendfile('views/crossdomain.html');
});


server.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
