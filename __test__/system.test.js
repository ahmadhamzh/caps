'use strict'

const events = require('../moduler/event-pool');
const order = {
    store: 'test 1',
    orderId: 10,
    custumer: 'test test',
    address: 'test -test'
}

jest.useFakeTimers();

describe('events check', () => {
    
    test('check for pickup event',  () => {        
        require('../moduler/system')
        expect(events.emit('pickup', order)).toEqual(true)
        
    })
    
    test('check for delivered event',  () => {        
        require('../moduler/system')
        expect(events.emit('delivered', order)).toEqual(true)
        
    })
    
    test('check for transit event',  () => {        
        require('../moduler/system')
        expect(events.emit('transit', order)).toEqual(true)

    })
   

})