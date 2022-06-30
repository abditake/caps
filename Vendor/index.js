'use strict';

const MessageClient = require('../lib/messageClient.js')
const chance = require('../lib/chance');

const messageQueue = new MessageClient('pickup')

let storeName = chance.company();


setInterval(async () => {
 let order = {
  payload: {
    store: storeName,
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address()
  }
}

  messageQueue.publish('ORDER_RECEIVED', order);
  console.log('Customer order received with orderID ',order.payload.orderID);
}, 20000);


messageQueue.subscribe('ORDER_RECEIVED', (payload) => {
  messageQueue.publish('PICKUP_REQUESTED', payload);
  console.log(`${payload.payload.store}: Order with ${payload.payload.orderID} has been PICKED UP`)
});

messageQueue.subscribe('DELIVERY_CONFIRMED', (payload) => {
  console.log(`${payload.payload.store} delivery with orderID:${payload.payload.orderID} confirmed. Thank you!`)
})