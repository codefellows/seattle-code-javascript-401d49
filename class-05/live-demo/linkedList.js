'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
  }

  // add a node to the end of the linked list
  add(value){
    let node = new Node(value);

    // if no head exists, we assign the new node as head and we are done
    if(!this.head){
      this.head = node;
      return;
    }

    // traverse the linked list and add the new node to the end
    let current = this.head;

    while(current.next){
      current = current.next;
    }
    current.next = node
  }

  // traverse a linked list and log the value of each node
  traverse(){
    let current = this.head;

    while(current){
      // do the thing
      console.log(current.value);
      current = current.next;
    }
  }

  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  includes(value){
    let result = false

    let current = this.head;
    while(current){
      if(current.value === value) result = true;
      current = current.next
    }

    return result;
  }

  toString(){
    let str = '';
    let current = this.head;
    while (current){
      str += `{ ${current.value} } -> `;
      current = current.next
    }
    str += 'NULL';
    return str;
  }

  append(value){
    const node = new Node(value);

    if(!this.head){
      this.head = node;
      return;
    }
    let current = this.head;

    while(current.next){
      current = current.next
    }
    current.next = node
  }

  insertBefore(value, newValue){
    if(!this.head){
      throw new Error('Linked List is Empty');
    }

    if (this.head.value === value){
      this.insert(newValue);
      return
    }

    let current = this.head;

    while(current){
      // console.log({current, currentNext: current.next})
      if (current.next && current.next.value === value){
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode
        current =  current.next.next
      } else{
        current = current.next;
      }
    }
  }

  insertAfter(value, newValue){
    if(!this.head){
      throw new Error('Linked List is Empty');
    }

    let current = this.head;

    while(current){
      // console.log({current, currentNext: current.next})
      if (current.value === value){
        let newNode = new Node(newValue);
        newNode.next = current.next;
        current.next = newNode
      }

      current = current.next;
    }
  }
}

let list = new LinkedList();
list.add('a');
list.add('b');
list.add('c');
list.add('d');
list.add('e');


console.log(JSON.stringify(list));
list.traverse();

module.exports = LinkedList;
