var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('port', (process.env.PORT || 3000));

app.get('/ece926d8c0356205276a45266d361161', function(request, response) {
    response.send("OK");
    io.emit('action');
});

server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});