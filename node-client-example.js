var socket = require('socket.io-client')('https://young-fjord-53100.herokuapp.com');

socket.on('count', function(count){
    console.log('Do something: ', count);
});