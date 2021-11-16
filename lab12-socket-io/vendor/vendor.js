'use strict'

const faker = require('faker')
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const capsConnection = io.connect(host);

capsConnection.on('getAllDelivered')

capsConnection.on('delivered', (payLoad) => {
    capsConnection.emit('receivedDelivered', payLoad);
    console.log(`thank you for delivering  ${payLoad.orderId}`);
})

setInterval(() => {
    let order =
    {
        store: faker.random.word(),
        orderId: Math.ceil(Math.random() * 10000),
        custumer: faker.name.findName(),
        address: faker.address.streetAddress()
    };    
    capsConnection.emit('pickup', order);
}, 5000);