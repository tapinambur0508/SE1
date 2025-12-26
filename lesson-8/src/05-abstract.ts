abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  a: number;

  constructor(a: number) {
    super();
    this.a = a;
  }

  area(): number {
    return this.a ** 2;
  }
}

// const shape = new Shape();
const circle = new Circle(10);
console.log(circle.area()); // 100π

const square = new Square(2);
console.log(square.area()); // 4
