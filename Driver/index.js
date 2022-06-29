'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');



socket.on('ORDER', (payload)=>{
  setTimeout(() => {
    console.log(`DRIVER: picked up order ${payload.orderId}`);
    socket.emit('IN-TRANSIT',payload);
  }, 1000);

  setTimeout(() => {
    console.log(`DRIVER: delivered order ${payload.orderId}`); 
    socket.emit('DELIVERED', payload);
  }, 3000);


});




// const eventPool = require('../eventPool');


// eventPool.on('PICKUP', driverEvent);

// eventPool.on('DELIVERED', driverEvent);


// function driverEvent(payload) {

  
//   setTimeout(() => {
//     console.log(`Driver: Picked up Order ${payload.orderId}`);
//     eventPool.emit('IN-TRANSIT', payload);
//   }, 1000);


//   setTimeout(() => {
//     console.log(`Driver: Delivered Order ${payload.orderId}`);
//     eventPool.emit('DELIVERED', payload);
//   }, 3000);
// }

// function driverPickup(payload) {
//   setTimeout(() => {

//   }, 1000);
// }


// function driverDelivered(payload) {
//   setTimeout(() => {
//   }, 5000);
// }