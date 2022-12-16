'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop(){
    let removedValue = this.top ? this.top.value: this.top;
    if (this.top){
      this.top = this.top.next;
    }
    return removedValue;
  }

  peek(){
    return this.top.value;
  }

  empty(){
    return this.top === null;
  }
}

class Queue {
  constructor(){
    this.front = null;
    this.back = null;
  }

  enqueue(value){
    let newNode = new Node(value);
    if(this.front){
      // getting ready to put it in line
      this.back.next = newNode
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue(){
    let removedValue = null;
    if(this.front){
      removedValue = this.front.value;
      if (this.front === this.back){
        this.back = null;
      }
      this.front = this.front.next
    }

    return removedValue;
  }

}

module.exports = { Stack, Queue }
