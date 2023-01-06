# Hashmaps

### Visualization

![hashtable](./live-demo/assets/beer-hash.png)
> want something from a specific "bucket" grab it by number in the above example

## Review

### Linked List

Why would we use a linked list?
- Linear storage system
- browse forward possibly (backward)
- want to store some information and have no rules about insertion or removal

### Stack or Queue

why would we use a stack or queue?  
- still linear, but perhaps we want FIFO or FILO/LIFO behavior

### Binary Tree

Why would we use a binary tree?  hierarchical data use
- file structure (k-ary tree)
- DOM (k-ary tree)

### Binary Search Tree

Why would we use a BST?  
- efficiency: with sorted numbers, run time cut in half with each search option

## Hash Table

> You may hear HashTable, HashMap, or Map -- takeaway: collisions are allowed

> You may also hear HashSet or Set  -- takeaway: NO collisions

Why would we use a Hash Table?
- Fast LOOKUP:  0(1) lookup


### What is a HashTable

A structure (an array in js) that stores key value pairs.  
- we find a way to translate the key(hash) into an index in that array


### Why?  How is this useful

- hashing can add security, but not the main reason why
- PERFORMANT LOOKUP
- constant O(1) lookup

### Terminology

- Key: (what we can hash) - this will be a primitive in today's implementation (could also be an object possibly - see language docs!)
- Hashing: pass in a string, return that hashed string as a number.  The number translates to a specific or "deterministic" place within our structure (HashTable)
- Collision: if a key hashes to the SAME location in our structure, we call that a collision
  - the more perfect hash you have, the less likely you are to have collisions
-Bucket: a linked list (structure) built at the index in our HashTable to hold multiple keys (collisions)

### Hashing Algorithm

The goal is to input a key, and output a location in our HashTable
- decide the "size". aka how many buckets. aka how many indexes in the array:  `1024`
- turn the key into a string
  - convert string characters into ASCII values
  - sum all of the ASCII value
  - multiply our sum by a large primary number `599`
  - take that product and get the `%` (modulo) when divided by the number of buckets (`1024`)

  example:
  ```javascript
  `ASCII sum of 'Ryan'` = 410.
  410 * 599 = 245590
  245590 % 1024 = 854
  // 'Ryan' would hash to a location of 854
  ```
