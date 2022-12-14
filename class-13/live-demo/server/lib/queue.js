'uses strict';

class Queue {
  constructor(){
    this.data = {};
  }

  store(key, value){
    this.data[key] = value;
    console.log('something was added to queue');
    // key might look lik:  "mmmmm banana" - some string
    return  key;
  }

  read(key){
    return this.data[key];
  }

  remove(key){
    console.log('something was removed from queue');
    let value = this.data[key];
    delete this.data[key];
    return value;
  }
}

module.exports = Queue;
