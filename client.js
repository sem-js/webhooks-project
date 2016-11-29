var socket = require("socket.io-client")("http://webhooks-bridge.herokuapp.com");

socket.on("connect", () => console.log("CONNECT"));
socket.on("connect_error", err => console.log("ERROR", err));

socket.on("webhook", function(data){
    console.log("Webhook Received: ", data);
});

