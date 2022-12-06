'use strict';

const { app } = require('../src/server');
const { sequelize } = require('../src/auth/models');
const supertest = require('supertest');
const request = supertest(app);

beforeAll( async () => {
  await sequelize.sync();
});

afterAll( async () => {
  await sequelize.drop();
});

describe('Auth Tests', () => {
  test('allows user to signup with a POST to the /signup route', async () => {
    let response = await request.post('/signup').send({
      username: 'tester',
      password: 'pass',
    });
    expect(response.status).toBe(200);
    expect(response.body.username).toEqual('tester');
    expect(response.body.password).toBeTruthy();
    expect(response.body.password).not.toEqual('pass');
  });
  // not working, play with this if you like!
  // test('allows user to signup with a POST to the /signin route', async () => {
  //   let response = await request.post('/signin').set('headers', {authorization: 'Basic dGVzdDpwYXNz'});
  //   expect(response.status).toBe(200);
  //   expect(response.body.username).toEqual('tester');
  //   expect(response.body.password).toBeTruthy();
  //   expect(response.body.password).not.toEqual('pass');
  // });

});
