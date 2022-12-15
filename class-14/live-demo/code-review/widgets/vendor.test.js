'use strict';

const { createOrder, thankDriver } = require('./handlers');
// const eventPool =  require('../eventPool');
let socket = require('../socket-client');

jest.mock('../socket-client', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});
console.log = jest.fn();
describe('Vendor', () => {
  it('emits order as expected', () => {
    const payload = {
      store: '1-206-FLOWERS',
      orderId: 'test123',
      customer: 'elias',
      address: 'home'
    };
    createOrder(socket)(payload);
    expect(console.log).toHaveBeenCalledWith('Vendor: order ready for pickup', payload);
    expect(socket.emit).toHaveBeenCalledWith('PICKUP', payload)
  })
  it('thanks the driver', () => {
    thankDriver({customer: 'elias'});
    expect(console.log).toHaveBeenCalledWith('VENDOR: thank you for delivering to ', 'elias')
  })
})


