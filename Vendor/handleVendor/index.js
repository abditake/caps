'use strict';

// curried function to handle dependency injection
// basically, this needs a socket, AND we want pass in some text
module.exports = (socket) => (payload) => {
  console.log('Thank you for );
  socket.emit('PICKUP', payload);
};

// sendMessage(socket)('some text');

