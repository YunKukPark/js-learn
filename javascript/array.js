'use strict';

// Array

const fruits = ['đ', 'đ', 'đ'];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

console.clear();

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4.
// push : add and item to the end
fruits.push('đ', 'đĽ');

// pop : remove an item from the end
fruits.pop();

// unshift : add an item to the beginning
fruits.unshift('đ');

// shift : remove an item from the beginning
fruits.shift();

console.clear();

// splice : remove an item by index position
console.log(fruits);
fruits.splice(1, 1);

// combine two arrays
const fruits2 = ['ë§ęł ', 'ě˝ě˝ë'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
console.clear();
console.log(fruits);

console.log(fruits.indexOf('đ'));
console.log(fruits.includes('ë§ęł '));

// playground
console.clear();

const arr = [6, 2, 4, 6, 3, 345];

console.log(arr.sort());

const draw = (function () {
  console.log('hi');
})();

const array = ['yunkuk', 'seoyoung'];

array.forEach((name) => console.log(name));
