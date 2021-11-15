'use struct'


const faker = require('faker')
const io = require('socket.io-client');
const host = 'http://localhost:3000';
const capsConnection = io.connect(host);


setInterval(() => {
    let order = 
         {
            store : faker.random.word(),
            orderId : Math.ceil(Math.random()*10000),
            custumer : faker.name.findName(),
            address : faker.address.streetAddress()
    } ;    
    console.log('----------------------');    
    // console.log(order);    
    console.log('----------------------');    
    capsConnection.emit('pickup', order );
    console.log('----------------------');
  
  }, 4000);