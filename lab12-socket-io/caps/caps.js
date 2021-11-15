'use struct'

const PORT = process.env.PORT || 3000;

const caps = require('socket.io')(PORT);

caps.on('connection', (socket) => {
    console.log(`conneting to ${socket.id}`);

    socket.on('pickup', (payLoad) => {
        console.log({
            Event: 'Pickup',
            time: Date.now(),
            payLoad
        });
        caps.emit('pickup', payLoad)
    })

    socket.on('transit', (payLoad) => {

        console.log({
            Event: 'transit',
            time: Date.now(),
            payLoad
        });
        caps.emit('transit', payLoad)

    })

    socket.on('delivered', (payLoad) => {

        console.log({
            Event: 'delivered',
            time: Date.now(),
            payLoad
        });
        
    })

})

