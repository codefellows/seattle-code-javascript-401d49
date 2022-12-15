'use strict';

const { pickupInTransit, deliveryHandler } = require('./driverHandler');
// const { io } = require('socket.io-client');
// const socket = io('http://localhost:3001/caps');
let socket = require('../socket-client');

jest.mock('../socket-client', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});
console.log = jest.fn();

describe('Driver', () => {
  it('picks up order and emits transit as expected', () => {
    const payload = {
      store: '1-206-FLOWERS',
      orderId: 'test123',
      customer: 'elias',
      address: 'home',
    };
    pickupInTransit(socket)(payload);
    expect(console.log).toHaveBeenCalledWith(`Driver: Driver has picked up delivery:`, payload.orderId);
    expect(socket.emit).toHaveBeenCalledWith('IN_TRANSIT', payload);
  });
  it('delivers as expected', () => {
    const payload = {
      store: '1-206-FLOWERS',
      orderId: 'test123',
      customer: 'elias',
      address: 'home',
    };
    deliveryHandler(socket)(payload);
    expect(console.log).toHaveBeenCalledWith('driver has delivered the package');
    expect(socket.emit).toHaveBeenCalledWith('DELIVERED', payload);
  });
});
