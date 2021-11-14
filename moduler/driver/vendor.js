'use strict'

const events = require('../event-pool')
const faker = require('faker')
setTimeout(()=>{
     events.on('transit', (payLoad)=>{
         console.log(`VENDOR: Thank you for delivering ${payLoad.orderId}`);
        events.emit('delivered', payLoad );
    })

}, 2000)

setInterval(() => {
    let order = 
         {
            store : faker.random.word(),
            orderId : Math.ceil(Math.random()*10000),
            custumer : faker.name.findName(),
            address : faker.address.streetAddress()
        

    } ;    
    console.log('----------------------');    
    console.log('new order');    
    console.log('----------------------');    
    events.emit('pickup', order );
    console.log('----------------------');
  
  }, 2000);