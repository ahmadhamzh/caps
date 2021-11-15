'use struct'


const PORT = process.env.PORT || 3000;
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const capsConnection = io.connect(host);


capsConnection.on('pickup', (payLoad)=>{
setTimeout(()=>{
    console.log(`Driver : picked up ${payLoad.orderId}`);
   
    capsConnection.emit('transit', payLoad );

},2000)
})

capsConnection.on('transit',(payLoad)=>{
    

        console.log(`Driver :  delivered up ${payLoad.orderId}`);
    
})