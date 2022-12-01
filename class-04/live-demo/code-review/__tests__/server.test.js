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
    let newCustomer = await request.post('/customer').send({
      name: 'tester',
      age: 42,
      pronouns: 'they/them',
    });
    let newCustomerTwo = await request.post('/customer').send({
      name: 'Ryan',
      age: 48,
      pronouns: 'he/him',
    });

    expect(newCustomer.status).toEqual(200);
    expect(newCustomer.body.name).toEqual('tester');
    expect(newCustomer.body.age).toEqual(42);
    expect(newCustomer.body.pronouns).toEqual('they/them');

    expect(newCustomerTwo.status).toEqual(200);
    expect(newCustomerTwo.body.name).toEqual('Ryan');
    expect(newCustomerTwo.body.age).toEqual(48);
    expect(newCustomerTwo.body.pronouns).toEqual('he/him');

  });

  test('finds all customers', async () => {
    let response = await request.get('/customer');
    console.log('-----------', response.body);

    expect(response.status).toEqual(200);

    // if using sqlite:memory, be sure and delete the memory file!
    expect(response.body.length).toEqual(2);
    expect(response.body[0].name).toEqual('tester');
    expect(response.body[0].age).toEqual(42);
    expect(response.body[0].pronouns).toEqual('they/them');
    expect(response.body[1].name).toEqual('Ryan');
    expect(response.body[1].age).toEqual(48);
    expect(response.body[1].pronouns).toEqual('he/him');

  });

  test('finds a single customer', async () => {
    let response = await request.get('/customer/2');

    // console.log('!!!!!!!!!!!!', response.body);
    expect(response.body.name).toEqual('Ryan');
    expect(response.body.age).toEqual(48);
    expect(response.body.pronouns).toEqual('he/him');
  });

  test('updates a single customer', async () => {
    await request.put('/customer/1').send({
      name: 'Mr. Tester',
      age: 42,
      pronouns: 'he/him',
    });

    let response = await request.get('/customer/1');

    expect(response.body.name).toEqual('Mr. Tester');
    expect(response.body.age).toEqual(42);
    expect(response.body.pronouns).toEqual('he/him');
  });

  test('deletes a single customer', async () => {
    await request.delete('/customer/1');

    let response = await request.get('/customer');

    expect(response.body.length).toEqual(1);
    expect(response.body[0].name).toEqual('Ryan');
    expect(response.body[0].age).toEqual(48);
    expect(response.body[0].pronouns).toEqual('he/him');
  });
});
