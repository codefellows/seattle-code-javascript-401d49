'use strict';

const { app } = require('../src/server.js');
const supertest = require('supertest');
const { sequelizeDatabase } = require('../src/models/index.js');
const request = supertest(app);

beforeAll(async () => {
  await sequelizeDatabase.sync();
});

afterAll(async () => {
  await sequelizeDatabase.drop();
});

describe('REST API', () => {

  test('handles invalid requests', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(404);
  });

  test('Creates a customer', async () => {
    let response = await request.post('/customer').send({
      name: 'tester',
      age: 42,
      pronouns: 'they/them',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('tester');
    expect(response.body.age).toEqual(42);
    expect(response.body.pronouns).toEqual('they/them');
  });

  test('finds all customers', async () => {
    let response = await request.get('/customer');
    console.log('-----------', response);
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('tester');
    expect(response.body[0].age).toEqual(42);
    expect(response.body[0].pronouns).toEqual('they/them');
  });

});
