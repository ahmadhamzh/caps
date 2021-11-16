'use struct'

const PORT = process.env.PORT || 3000;

const io = require('socket.io-client');
const host = 'http://localhost:3000';
const capsConnection = io.connect(host);

capsConnection.on('getAllPickup')
capsConnection.on('getAllTransit')


capsConnection.on('pickup', (payLoad) => {
    capsConnection.emit('receivedPickup', payLoad);
    setTimeout(() => {
        console.log(`Driver : picked up ${payLoad.orderId}`);
        capsConnection.emit('transit', payLoad);
    }, 2000)
})

capsConnection.on('transit', (payLoad) => {
    capsConnection.emit('receivedTransit', payLoad);
    setTimeout(() => {
        console.log(`Driver :  delivered up ${payLoad.orderId}`);
        capsConnection.emit('delivered', payLoad);
    }, 2000)
})