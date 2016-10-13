'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
};

class Dog extends Animal {
  bark() {
    console.log('Dog ' + this.name + ' is barking')
  }
};

var dog = new Dog ('Aban');
dog.getName()
dog.bark()
