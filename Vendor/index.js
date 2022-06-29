'use strict';

const Chance = require('chance');
const chance = new Chance();

const { io } = require('socket.io-client');

// acknowledge a connection, no subscriptions have occurred yet
const socket = io('http://localhost:3002');


console.log('hello this vendor')


const handleReceived = require('./handleReceived');
const sendMessage = createSendMessage(socket);

socket.on('RECEIVED', handleReceived);

setInterval(() => {
  sendMessage(`Hi ${chance.first()}`);
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