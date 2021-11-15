'use strict'

const PORT = process.env.PORT || 3000;
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const capsConnection = io.connect(host);

capsConnection.on('transit', (payLoad)=>{
    
    console.log(`thank you for delivering  ${payLoad.orderId}`);
   
    capsConnection.emit('delivered', payLoad );
})