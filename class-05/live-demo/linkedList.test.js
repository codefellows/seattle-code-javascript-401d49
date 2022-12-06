'use strict';

const LinkedList = require('./linkedList');

describe('Linked List', () => {
  let list = new LinkedList();
  it('accepts new nodes as expected', () => {
    list.add('a');
    list.add('b');
    list.add('c');
    // {a} -> {b} -> {c} -> null
    expect(list.head.value).toEqual('a');
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
  });
  it ('Can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    console.log('this is my list', list);
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
    expect(list.head).toBeFalsy();
  })
  it ('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert(3);

    expect(list.head.value).toEqual(3)
  });
  it ('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1)
    list.insert(2);
    expect(list.head.value).toEqual(2)
    list.insert(3);
    expect(list.head.value).toEqual(3)

    expect(list.head.next.value).toEqual(2)
    expect(list.head.next.next.value).toEqual(1)

  });
  it ('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.head.value).toEqual(3);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(1);

  });
  it ('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.includes(2)).toEqual(true);
  })
  it ('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);

    expect(list.includes(42)).toEqual(false);
  });
});



