'use strict';

const MessageClient = require('../lib/messageClient');

const messageQueue = new MessageClient('driver');


messageQueue.subscribe('PICKUP_REQUESTED', (payload) => {
  setTimeout(() => {
    messageQueue.publish('IN_TRANSIT', payload);
    console.log(`ORDER STATUS: Order for ${payload.payload.orderID} is currently IN TRANSIT.`);
  }, 2000);
});
messageQueue.subscribe('IN_TRANSIT', (payload) => {
  setTimeout(() => {
    messageQueue.publish('DELIVERED', payload);
    console.log(`ORDER STATUS: Order for ${payload.payload.orderID} has been DELIVERED.`);
  }, 2000);
});