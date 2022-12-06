'use strict';

const basicAuth = require('../src/auth/middleware/basic');
const { sequelize, Users } = require('../src/auth/models');

let user = {
  username: 'tester',
  password: 'pass',
};

beforeAll( async () => {
  await sequelize.sync();
  await Users.create(user);
});

afterAll( async() => {
  await sequelize.drop();
});

describe('Basic auth middleware', () => {
  it('fails on signin as expected', () => {
    let req = {
      headers: {
        authorization: 'Basic banana',
      },
    };
    let res = {};
    let next = jest.fn();

    basicAuth(req, res, next)
      .then(() => {
        expect(next).toHaveBeenCalledWith('Invalid User');
      });

  });
  test('passes appropriately', () => {
    let req = {
      headers: {
        authorization: 'Basic dGVzdDpwYXNz',
      },
    };
    let res = {};
    let next = jest.fn();

    basicAuth(req, res, next)
      .then(() => {
        expect(next).toHaveBeenCalledWith();
      });
  });
});
