class Bird {
  fly() {
    console.log("Flying...");
  }
}

class Fish {
  swim() {
    console.log("Swimming...");
  }
}

function move(animal: Bird | Fish) {
  if (animal instanceof Bird) {
    animal.fly();
  } else {
    animal.swim();
  }
}
