'use strict';

// const yunkuk = {
//   name: 'yunkuk',
//   age: 4,
//   address: {
//     city: 'suncheon',
//     zipcode: '57005',
//   },
// };

// class person {
//   constructor(name, address) {
//     console.log(person);
//     console.log(this);
//     this.name = name;
//     this.address = address;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     this._name = value;
//   }
// }

// const yunkuk2 = new person('yunkuk', 'suncheon');

// console.log(yunkuk2.name);

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const yunkuk = { name: 'yunkuk', age: 5 };

// 2. Computed properties
yunkuk['hasJob'] = true;

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(yunkuk, 'hasJob');
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = { name: 'hi1', age: 4 };
const person2 = { name: 'hi2', age: 5 };
const person3 = { name: 'hi3', age: 6 };
const person4 = new Person('kk', 123);

console.log(person4);

console.clear();

for (let key in yunkuk) {
  console.log(key);
}

const arr = [5, 1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.clear();
for (let value of arr) {
  console.log(value);
}

const user = { name: 'yunkuk', age: '21' };

// old way
const user2 = {};
for (let key in user) {
  user2[key] = user[key];
}

console.clear();
console.log(user2);

// new way
const user3 = Object.assign(user3, user);

console.clear();
console.log(user3);
