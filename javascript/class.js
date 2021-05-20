'use strict';
// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class 선언
class Person {
  // constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  // method
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const yunkuk = new Person('yunkuk', 21);

console.log(yunkuk.name);
console.log(yunkuk.age);
yunkuk.speak();

// 2. Getter and setters

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    console.log(this);
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      throw new Error('age can not be negative');
    }
    this._age = value;
  }
}

const user1 = new User('Steve', 'Job', 34);

// 3. Private, Public
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods

class Article {
  static publisher = 'hihi';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(this.color);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('triangle~!');
  }
  getArea() {
    // OverRiding
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());
