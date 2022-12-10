'use strict';

const { db, users } = require('../src/models');
const supertest = require('supertest');
const { server } = require('../src/server');
const request = supertest(server);

let writerUser;
let adminUser;

beforeAll( async () => {
  await db.sync();
  writerUser = await users.create({
    username: 'writer', 
    password: 'pass',
    role: 'writer',
  });
  adminUser = await users.create({
    username: 'admin', 
    password: 'pass',
    role: 'admin',
  });
});

afterAll( async () => {
  await db.drop();
});

describe('API / Auth Server Integration', () => {

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');

    expect(response.status).toEqual(404);
  });

  it('allows v1 clothes create ', async () => {
    let response = await request.post('/api/v1/clothes').send({
      name: 'pants',
      color: 'tan',
      size: 'large',
    });
    expect(response.status).toBe(201);
    expect(response.body.name).toEqual('pants');
  });

  it('allows v2 clothes create ', async () => {
    let response = await request.post('/api/v2/clothes').send({
      name: 'shorts',
      color: 'tan',
      size: 'large',
    }).set('Authorization', `Bearer ${writerUser.token}`);

    expect(response.status).toBe(201);
    expect(response.body.name).toEqual('shorts');
  });

  it('allows v1 read access', async () => {
    let response = await request.get('/api/v1/clothes');

    // console.log('----------read test', writerUser);
    expect(response.status).toBe(200);
    expect(response.body[0].name).toEqual('pants');
  });

  it('allows v2 read access', async () => {
    let response = await request.get('/api/v2/clothes').set('Authorization', `Bearer ${writerUser.token}`);
    // console.log('----------read test', writerUser);
    expect(response.status).toBe(200);
    expect(response.body[1].name).toEqual('shorts');
  });

  it('allows v1 read one access', async () => {
    let response = await request.get('/api/v1/clothes/1');
    // console.log('----------read test', writerUser);
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('pants');
  });

  it('allows v2 read one access', async () => {
    let response = await request.get('/api/v2/clothes/2').set('Authorization', `Bearer ${writerUser.token}`);
    // console.log('----------read test', writerUser);
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('shorts');
  });

  it('allows v1 clothes update ', async () => {
    let response = await request.put('/api/v1/clothes/1').send({
      name: 'pant-pants',
      color: 'tan',
      size: 'large',
    });

    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('pant-pants');
  });

  it('restricts v2 clothes update by writer', async () => {
    let response = await request.put('/api/v2/clothes/2').send({
      name: 'short-shorts',
      color: 'tan',
      size: 'large',
    }).set('Authorization', `Bearer ${writerUser.token}`);

    let errorObject = JSON.parse(response.text);
    expect(response.status).toBe(500);
    expect(errorObject.message).toEqual('Access Denied');
  });

  it('allows v2 clothes update by admin', async () => {
    let response = await request.put('/api/v2/clothes/2').send({
      name: 'short-shorts',
      color: 'tan',
      size: 'large',
    }).set('Authorization', `Bearer ${adminUser.token}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toEqual('short-shorts');
  });

  it('allows v1 clothes delete ', async () => {
    let response = await request.delete('/api/v1/clothes/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(1);
  });

  it('restricts v2 clothes delete by writer', async () => {
    let response = await request.delete('/api/v2/clothes/2').set('Authorization', `Bearer ${writerUser.token}`);
    let errorObject = JSON.parse(response.text);

    expect(response.status).toBe(500);
    expect(errorObject.message).toEqual('Access Denied');
  });

  it('allows v2 clothes delete by admin', async () => {
    let response = await request.delete('/api/v2/clothes/2').set('Authorization', `Bearer ${adminUser.token}`);
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual(1);
  });
});

