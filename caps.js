'use strict';


const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002


const server = new Server(PORT);


server.on('connection',(socket)=>{
  console.log('Successfully connected to Sever!!!',socket.id)
  socket.on('PICKUP', (payload) => {
    console.log('Server PICKUP event ', payload);
    // socket.emit('MESSAGE', payload); // send this to the same socket that emitted
    // server.emit('MESSAGE', payload);  //send to all connected sockets
    socket.broadcast.emit('PICKUP', payload); // send to all sockets except sender
  });
  
  socket.on('IN-TRANSIT', (payload) => {
    console.log('Server IN-TRANSIT event ', payload);
    // socket.emit('MESSAGE', payload); // send this to the same socket that emitted
    // server.emit('MESSAGE', payload);  //send to all connected sockets
    socket.broadcast.emit('IN-TRANSIT', payload); // send to all sockets except sender
  });

  socket.on('DELIVERED', (payload) => {
    console.log('Server DELIVERED event ', payload);
    socket.broadcast.emit('DELIVERED', payload);
  });
});


function logEvent(event, payload){
  let time = new Date();
  console.log('EVENT', {event, time, payload});
}







// const eventPool = require('./eventPool.js');
// require('./Driver/index');
// require('./Vendor/index');


// eventPool.on('PICKUP', (payload) => logEvent('PICKUP', payload));

// eventPool.on('IN-TRANSIT', (payload) => logEvent('IN-TRANSIT', payload));

// eventPool.on('DELIVERED', (payload) => logEvent('DELIVERED', payload));



// setInterval(() => {
//   // let newOrder
//   console.log('package ready for PICKUP');
//   // 2 args:  eventName, payload
//   eventPool.emit('ORDER', payload);
// }, 3000);