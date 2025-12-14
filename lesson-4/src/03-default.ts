function greeting(name: string, age?: number): string {
  if (age === undefined) {
    return `I am ${name}`;
  }

  return `I am ${name}, I am ${age} years old`;
}

greeting("Dave");
greeting("Dave", 20);

function sum(a: number, b: number, c: number = 0) {
  return a+ b+ c;
}

sum(1, 1);
sum(1, 2, 3);