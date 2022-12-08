'use strict';

const { db, users } = require('../src/models');
const supertest = require('supertest');
const { server } = require('../src/server');
const request = supertest(server);

let testUser;

beforeAll( async () => {
  await db.sync();
  testUser = await users.create({
    username: 'writer', 
    password: 'pass',
    role: 'writer',
  });
});

afterAll( async () => {
  await db.drop();
});

describe('ACL Integration', () => {
  it('allows clothes create ', async () => {
    let response = await request.get('/api/v1/clothes').send({
      name: 'pants',
      color: 'tan',
      size: 'large',
    });
    expect(response.status).toBe(200);
    // expect(response.text).toEqual('You have create permission');
  });
  it('allows read access', async () => {
    let response = await request.get('/api/v1/clothes');
    // console.log('----------read test', testUser);
    expect(response.status).toBe(200);
    // expect(response.text).toEqual('You have read permission');
  });
  it('allows read access', async () => {
    let response = await request.get('/api/v2/clothes').set('Authorization', `Bearer ${testUser.token}`);
    // console.log('----------read test', testUser);
    expect(response.status).toBe(200);
    // expect(response.text).toEqual('You have read permission');
  });

  

  // it('allows update access', async () => {
  //   let response = await request.get('/update').set('Authorization', `Bearer ${testUser.token}`);
  //   const parsedResponse = JSON.parse(response.text);
  //   expect(response.status).toBe(500);
  //   expect(parsedResponse.message).toEqual('Access Denied');
  // });

  // it('allows delete access', async () => {
  //   let response = await request.get('/delete').set('Authorization', `Bearer ${testUser.token}`);
  //   const parsedResponse = JSON.parse(response.text);
  //   expect(response.status).toBe(500);
  //   expect(parsedResponse.message).toEqual('Access Denied');
  // });
});

