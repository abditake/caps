'use strict';

function packageReceived(payload) {
  console.log(`VENDOR: Thank you for delivering order ${payload.orderId} `)
  socket.emit('IN-TRANSIT', payload);
}

module.exports= {
  packageReceived
}
