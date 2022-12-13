'use strict';

const { generateOrder, thankDriver } = require('./handlers');
const eventPool = require('../eventPool');

jest.mock('../eventPool.js', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});
console.log = jest.fn();

describe('Vendor', () => {
  it('emits order as expect', () => {
    const payload = {
      store: '1-206-flowers',
      orderId: 'test123',
      customer: 'Ryan',
      address: 'home',
    };
    generateOrder(payload);
    expect(console.log).toHaveBeenCalledWith('Vendor: order ready for pickup');
    expect(eventPool.emit).toHaveBeenCalledWith('PICKUP', payload);
  });
  it('thanks the driver', () => {
    thankDriver({customer: 'Ryan'});
    expect(console.log).toHaveBeenCalledWith('Vendor: Thank you for delivering to: ', 'Ryan');
  });
});
