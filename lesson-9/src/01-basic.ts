// function log(value) {
//   console.log(value);
// }

// log("Hello, World!");
// log(1);
// log([1, 2, 3, 4]);

// function logString(value: string): void {
//   console.log(value);
// }

// function logNumber(value: number): void {
//   console.log(value);
// }

// logString("Hello, World!");
// logNumber(1);

// function log(value: any): void {
//   console.log(value);
// }

// log("Hello, World!");
// log(1);
// log([1, 2, 3, 4]);

function log<T>(value: T): void {
  console.log(value);
}

log<string>("Hello, World");
log<number>(1);
log<number[]>([1, 2, 3, 4]);

function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

pair<string, number>("id", 12345);
pair<string, string[]>("statuses", ["Active", "Paused", "Disabled"]);
