'use strict';

class Queue {
  constructor(){
    this.data = {};
  }

  store(key, value){
    this.data[key] = value;
    console.log('something was added');
    return key;
  }

  read(key){
    return this.data[key];
  }

  remove(key){
    let value = this.data[key];
    delete this.data[key];
    console.log('something was removed');
    return value;
  }
}

module.exports = Queue;
