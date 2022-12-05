'use strict';

let base64 = require('base-64');
let bcrypt = require('bcrypt');

console.log('---------BASE 64------------');

let str = 'Ryan pass 123';
let encodedStr = base64.encode(str);
let decodedStr = base64.decode(encodedStr);

console.log('str', str);
console.log('encodedStr:', encodedStr);
console.log('decodedStr:', decodedStr);

console.log('---------HASHING with bcrypt------------');

let password = 'pass123';
let complexity = 5;

encrypt(password, complexity);

async function encrypt(password, complexity){
  let hashedPassword = await bcrypt.hash(password, complexity);
  console.log(hashedPassword);

  let exampleOne = '$2b$05$tHHZFye0Z4erT5Ab1AtKGeylXKgvFSS6Pijnq9ujdOSIz/u/SYHuq';
  let exampleTwo = '$2b$05$iSVO8uRVZFCR8ktxqQi1welbAXosadfj0OdHSxaDkGdL6nuDT6TDS/lvUO';
  let exampleThree = '$2b$05$FDqMGXb8imSE1gv3DywOdeR6QR7caOVy4YfaCEYntQbSSqkMLkT56';

  let isValidOne = await bcrypt.compare(password, exampleOne);
  let isValidTwo = await bcrypt.compare(password, exampleTwo);
  let isValidThree = await bcrypt.compare(password, exampleThree);

  console.log('isValidOne:', isValidOne);
  console.log('isValidTwo:', isValidTwo);
  console.log('isValidThree:', isValidThree);
}
