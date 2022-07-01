'use strict';

const { io } = require('socket.io-client');

const socket = io('http://localhost:3002/caps');


function packageReceived(payload) {
  console.log(`VENDOR: Thank you for delivering order ${payload.orderId} `)
  socket.emit('IN-TRANSIT', payload);
}

module.exports= {
  packageReceived
}
