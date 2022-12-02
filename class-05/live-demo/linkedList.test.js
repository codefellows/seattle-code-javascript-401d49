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
});


// I would write an assertion for each of these (below)
// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list
