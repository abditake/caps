'use strict';
const eventPool = require('../eventPool');
const Chance = require('chance');
const chance = new Chance();


eventPool.on('DELIVERED', delivered);

let storeName = chance.company();



function delivered(payload) {
  console.log(`VENDOR: Thank you for delivering order ${payload.orderId} `);
}


let order = {
  store: storeName,
  orderId: chance.guid(),
  customer: chance.name(),
  address: chance.address()
};


setInterval(() => {
  eventPool.emit('PICKUP', order);
}, 3000);