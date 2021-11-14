'use strict'

const events = require('../event-pool')
setTimeout(()=>{

    events.on('pickup',(payLoad)=>{
        console.log('----------------------');
        console.log(`Driver : picked up ${payLoad.orderId}`);
        console.log('----------------------');
        events.emit('transit', payLoad );
    })

}, 2000)



    events.on('transit',(payLoad)=>{
        console.log(`Driver :  delivered up ${payLoad.orderId}`);
    })


