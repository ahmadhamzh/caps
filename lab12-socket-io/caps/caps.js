'use struct'

const PORT = process.env.PORT || 3000;

const caps = require('socket.io')(PORT);

const messageQueue = {
    pickup :{},
    transit : {},
    delivered : {}
}

caps.on('connection', (socket) => {
    console.log(`conneting to ${socket.id}`);
    socket.on('pickup', (payLoad) => {
        messageQueue.pickup[payLoad.orderId] = payLoad
        console.log({
            Event: 'Pickup',
            time: Date.now(),
            payLoad
        });
        caps.emit('pickup', payLoad)
    })

    socket.on('receivedPickup',(payLoad)=>{
        console.log('befor delete pickup',messageQueue);
        delete messageQueue.pickup[payLoad.orderId]
        console.log('after delete pickup',messageQueue);
    })
    
    socket.on('transit', (payLoad) => {        
        messageQueue.transit[payLoad.orderId]= payLoad        
        console.log({
            Event: 'transit',
            time: Date.now(),
            payLoad
        });
        caps.emit('transit', payLoad)        
    })
    
    socket.on('receivedTransit',(payLoad)=>{
        console.log('befor delete transit',messageQueue);
        delete messageQueue.transit[payLoad.orderId]
        console.log('after delete transit',messageQueue);
    })
    
    socket.on('delivered', (payLoad) => {
        messageQueue.delivered[payLoad.orderId]= payLoad
        console.log({
            Event: 'delivered',
            time: Date.now(),
            payLoad
        });
        caps.emit('delivered', payLoad );        
    })

    socket.on('receivedDelivered',(payLoad)=>{
        console.log('befor delete delivered',messageQueue);
        delete messageQueue.delivered[payLoad.orderId]
        console.log('after delete delivered',messageQueue);
    })

    socket.on('getAllPickup', ()=>{
        console.log(`get all pickup tasks `);
        Object.keys(messageQueue.pickup).forEach(id =>{
        socket.emit('pickup',messageQueue.pickup[id])
        })
    })

    socket.on('getAllTransit', ()=>{
        console.log(`get all transit tasks `);
        Object.keys(messageQueue.transit).forEach(id =>{
            socket.emit('transit',messageQueue.transit[id])
        })
    })

    socket.on('getAllDelivered', ()=>{
        console.log(`get all delivered tasks `);
        Object.keys(messageQueue.delivered).forEach(id =>{
            socket.emit('transit',messageQueue.delivered[id])
        })
    })

})

