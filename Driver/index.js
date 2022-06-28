'use strict';



const eventPool = require('../eventPool');


eventPool.on('PICKUP', driverEvent);

// eventPool.on('DELIVERED', driverEvent);


function driverEvent(payload) {

  
  setTimeout(() => {
    console.log(`Driver: Picked up Order ${payload.orderId}`);
    eventPool.emit('IN-TRANSIT', payload);
  }, 1000);


  setTimeout(() => {
    console.log(`Driver: Delivered Order ${payload.orderId}`);
    eventPool.emit('DELIVERED', payload);
  }, 3000);
}

// function driverPickup(payload) {
//   setTimeout(() => {

//   }, 1000);
// }


// function driverDelivered(payload) {
//   setTimeout(() => {
//   }, 5000);
// }