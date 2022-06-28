'use strict';

const eventPool = require('./eventPool.js');
require('./Driver/index');
require('./Vendor/index');


eventPool.on('PICKUP', (payload) => logEvent('PICKUP', payload));

eventPool.on('IN-TRANSIT', (payload) => logEvent('IN-TRANSIT', payload));

eventPool.on('DELIVERED', (payload) => logEvent('DELIVERED', payload));


function logEvent(event, payload){
  let time = new Date();
  console.log('EVENT', {event, time, payload});
}

// setInterval(() => {
//   // let newOrder
//   console.log('package ready for PICKUP');
//   // 2 args:  eventName, payload
//   eventPool.emit('ORDER', payload);
// }, 3000);