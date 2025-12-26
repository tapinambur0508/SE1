// class Car {
//   brand: string;
//   year: number;
//   factory: string;

//   constructor(brand: string, year: number, factory: string = "Korea") {
//     this.brand = brand;
//     this.year = year;
//     this.factory = factory;
//   }
// }

// const car1 = new Car("KIA", 2019);
// const car2 = new Car("Volvo", 2025, "Sweden");
// console.log(car1.factory); // "Korea";
// console.log(car2.factory); // "Sweden";

class Car {
  brand: string;
  year: number;
  factory?: string;

  constructor(brand: string, year: number, factory?: string) {
    this.brand = brand;
    this.year = year;
    this.factory = factory;
  }
}

const car1 = new Car("KIA", 2019);

if (typeof car1.factory === "string") {
  console.log(car1.factory.toUpperCase());
}
