'uses strict';

const validator = require('../src/middleware/validator.js');

describe('Validator middleware', () => {
  let req = {query: {name: 'Ryan'}};
  let res = {};
  let next = jest.fn();

  it('validates query as expected', () => {
    validator(req, res, next);
    
    expect(next).toHaveBeenCalledWith();
  });

  it('fails appropriately if no query name property', () => {
    req = {query: {notName: 'Ryan'}};
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('Query Name Required');
  });
});


