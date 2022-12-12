'use strict';

const eventPool = require('../eventPool');
const handleBrain = require('./brainHandler');

jest.mock('../eventPool.js', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});
console.log = jest.fn();

describe('Handle Brain', () => {
  test('emit dilation event to close the pupils', () => {
    handleBrain({brightness: 55});
    expect(console.log).toHaveBeenCalledWith('Brain: Brightness changed!', {brightness: 55});
    expect(eventPool.emit).toHaveBeenCalledWith('DILATION', 'close');
  });
  test('emit dilation event to open the pupils', () => {
    handleBrain({brightness: 45});
    expect(console.log).toHaveBeenCalledWith('Brain: Brightness changed!', {brightness: 45});
    expect(eventPool.emit).toHaveBeenCalledWith('DILATION', 'open');
  });
});
