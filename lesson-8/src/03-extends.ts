class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move() {
    console.log("I can move");
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, bread: string) {
    super(name);
    this.breed = bread;
  }

  bark() {
    console.log("Woof!");
  }

  move() {
    console.log("I can move very fast");
  }
}

const d = new Dog("Luna", "Poodle");
console.log(d.bark()); // "Woof";
console.log(d.move()); // "I can move very fast";
