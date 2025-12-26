class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greeting(): string {
    return `Hi. I am ${this.name}`;
  }

  sum(a: number, b: number): number {
    return a + b;
  }
}

const user1 = new User("Dave");
console.log(user1.name); // 'Dave'
// confirm.log(user1.age);
console.log(user1.greeting()); // 'Hi. I am Dave'
console.log(user1.sum(1, 1)); // 2
