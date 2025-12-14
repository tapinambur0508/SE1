const array = [1, 2, 3, 4].map((number) => number * 2);

// function sum(a: number, b: number, callback: (result: number) => void) {
//   const result = a + b;
//   callback(result);
// }

// sum(1, 2, (result) => console.log(result));

const sum = (a: number, b: number): number => a + b;
const minus = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;

type Callback = (arg1: number, arg2: number) => number;

function calculate(a: number, b: number, callback: Callback): number {
  return callback(a, b);
}

const res1 = calculate(2, 2, sum);
const res2 = calculate(1, 4, minus);
const res3 = calculate(5, 5, multiply);
