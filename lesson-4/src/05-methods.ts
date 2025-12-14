type User = {
  name: string;
  sayHi: () => void;
  sum: (a: number, b: number) => number;
  greeting(age?: number): void;
}

const user: User = {
  name: "Dave",
  sayHi: () => console.log("Hi"),
  sum: (a, b) => a + b,
  greeting(age) {
    if (age === undefined) {
      console.log(`Hi, I am ${this.name}`);
      return;
    }
    console.log(`Hi, I am ${this.name}. I am ${age} years old`);
  }
}

user.name; // Dave
user.sayHi(); // Hi