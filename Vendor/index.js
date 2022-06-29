'use strict';
const packageReceived = require('./handleVendor/index');
const Chance = require('chance');
const chance = new Chance();

const { io } = require('socket.io-client');

// acknowledge a connection, no subscriptions have occurred yet
const socket = io('http://localhost:3002/caps');

let storeName = '1-206-flowers';
socket.emit('JOIN', storeName);

// socket.on('ORDER', readyForPickup);
socket.on('DELIVERED', packageReceived);

setInterval(() => {
  let order = {
    store: storeName,
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address()
  };
  socket.emit('ORDER',order);
}, 3000);










// 'use strict';
// const eventPool = require('../eventPool');
// const Chance = require('chance');
// const chance = new Chance();


// eventPool.on('DELIVERED', delivered);

// let storeName = chance.company();



// function delivered(payload) {
//   console.log(`VENDOR: Thank you for delivering order ${payload.orderId} `);
// }


// let order = {
//   store: storeName,
//   orderId: chance.guid(),
//   customer: chance.name(),
//   address: chance.address()
// };


// setInterval(() => {
//   eventPool.emit('PICKUP', order);
// }, 3000);