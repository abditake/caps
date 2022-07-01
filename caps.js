'use strict';


const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002;


const server = new Server(PORT);

const caps = server.of('/caps');


caps.on('connection',(socket)=>{
  console.log('Successfully connected to Caps!!!', socket.id);
  socket.on('JOIN', (room) => {
    console.log(`You've joined the ${room} room!`);
    socket.join(room);
  });
  
  
  socket.on('ORDER', (payload) => {
    logEvent('ORDER',payload);
    socket.broadcast.emit('ORDER', payload); 
  });

  
  socket.on('IN-TRANSIT', (payload) => {
    logEvent('IN-TRANSIT',payload);
    caps.to(payload.store).emit('IN-TRANSIT', payload); 
  });

  socket.on('DELIVERED', (payload) => {
    logEvent('DELIVERED',payload);
    caps.to(payload.store).emit('DELIVERED', payload); 
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