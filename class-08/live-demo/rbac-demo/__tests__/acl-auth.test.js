'use strict';

const { sequelizeDatabase, UsersModel } = require('../src/auth/models');
const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

let testUser;

beforeAll( async () => {
  await sequelizeDatabase.sync();
  testUser = await UsersModel.create({
    username: 'writer', 
    password: 'pass',
    role: 'writer',
  });
});

afterAll( async () => {
  await sequelizeDatabase.drop();
});

describe('ACL Integration', () => {
  it('allows read access', async () => {
    let response = await request.get('/read').set('Authorization', `Bearer ${testUser.token}`);
    // console.log('----------read test', testUser);
    expect(response.status).toBe(200);
    expect(response.text).toEqual('You have read permission');
  });

  it('allows create access', async () => {
    let response = await request.get('/create').set('Authorization', `Bearer ${testUser.token}`);
    expect(response.status).toBe(200);
    expect(response.text).toEqual('You have create permission');
  });

  it('allows update access', async () => {
    let response = await request.get('/update').set('Authorization', `Bearer ${testUser.token}`);
    const parsedResponse = JSON.parse(response.text);
    expect(response.status).toBe(500);
    expect(parsedResponse.message).toEqual('Access Denied');
  });

  it('allows delete access', async () => {
    let response = await request.get('/delete').set('Authorization', `Bearer ${testUser.token}`);
    const parsedResponse = JSON.parse(response.text);
    expect(response.status).toBe(500);
    expect(parsedResponse.message).toEqual('Access Denied');
  });
});

