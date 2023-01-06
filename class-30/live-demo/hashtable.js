'use strict';

const { LinkedList } = require('./LinkedList');

class HashTable{
  constructor(size){
    this.size = size;
    this.buckets =  new Array(size);
  }

  hash(key){
    let characters = key.split('');
    // use the reducer pattern
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0)  
    }, 0);

    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value){
    let position = this.hash(key);
    // square bracket notation allows me to create an object property dynamically from a variable
    let data = {[key]: value};

    // I am choosing to show you how to store in a linked list - your implementation will be different
    // using a linked list:  
      // does the bucket exist?  if it does, add to existing bucket.
      // if it does not, create the bucket and then add it
    if (this.buckets[position]){
      let bucket = this.buckets[position];
      bucket.add(data);
    } else {
      let bucket = new LinkedList();
      bucket.add(data);
      this.buckets[position] = bucket
    }
  }

  get(key){
    let position = this.hash(key);

    // your implementation will be different
    // I need to interact with that linked list
    if (this.buckets[position]){
      let bucket = this.buckets[position];
      let value = bucket.head.value[key];
      return value;
    }
  }

  has(){

  }

  keys(){

  }


}

let table = new HashTable(1024);
console.log(table);
console.log('Ryan',table.hash('Ryan'));
console.log('Hunter',table.hash('Hunter'));
console.log('Kenny',table.hash('Kenny'));
table.set('Ryan', 48);
console.log(table);
console.log(JSON.stringify(table.buckets[854]));
table.set('Kenny', 'red');
console.log('A Kenny Value', table.get('Kenny'));




