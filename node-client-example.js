var socket = require('socket.io-client')('https://young-fjord-53100.herokuapp.com');

socket.on('action', function(data){
    console.log('Do something: ', data);
});
