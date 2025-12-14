function sum(a: number, b: number) {
  return a + b;
}

sum(1, 2);
sum(1, "hello");
sum("hello", "world");

function greeting(name: string) {
  return `Hello, ${name}`
}

greeting("Dave");
greeting(1234);
greeting(["Dave", "Mary"]);

function multiply(a: number, b: number): number {
  return a * b;
  // return "Hello";
}

multiply(1, 2);
