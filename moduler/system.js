'use strict'

const events = require("./event-pool")

events.on('pickup', (payLoad)=>{
    
    console.log('----------------------');
    console.log({
        time : Date.now(),
        payLoad
    });
    console.log('----------------------');
})

require('./driver/driver')
require('./driver/vendor')

events.on('delivered',(payLoad)=>{
    console.log({
        time : Date.now(),
        payLoad
    });
    
})

