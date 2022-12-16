'use strict';

const { Stack, Queue } = require('./stacks-queues');

describe('Stack', () => {
  it('Can successfully push', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();
  });
  it('Can successfully push and pop', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.top.value).toEqual(2);
    expect(stack.top.next.value).toEqual(1);
    expect(stack.top.next.next).toBeNull();
    stack.pop();
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
    let expected = stack.pop();
    expect(expected).toEqual(1);
    expect(stack.top).toBeNull();
  });
});

describe('Queue', () => {
  it('can enqueue and dequeue', () => {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    expect(q.front.value).toEqual(1);
    expect(q.back.value).toEqual(2);
    let returnedValue = q.dequeue();
    expect(returnedValue).toEqual(1);
    expect(q.front.value).toEqual(2);
    expect(q.back.value).toEqual(2);
    q.dequeue()
    expect(q.front).toBeNull();
  });
});
