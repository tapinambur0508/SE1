// let age: number = 20;

// age = "string";

let value: string | number | boolean = "my_string";

value = 10;
value = false;
value = [1, 2, 3, 4]

let array1: number[] = [1, 2, 3, 4, 5, "string"];
let mixedArray1: (string | number | boolean)[] = [1, "hello", 2, 3, "world", false];

let array2: Array<number> = [1, 2, 3, 4, 5, "string"];
let mixedArray2: Array<number | string> = [1, 2, 3, "hello", "world"];

type User = {
  id: string | number,
  name: string,
  age: number,
}

let user1: User = {
  id: "f149342f-c90a-40c5-9611-273861a81a6a",
  name: "Dave",
  age: 20
}

let user2: User = {
  id: 1,
  name: "Mary",
  age: 22,
}

if (typeof value === "string") {
  console.log(value.toUpperCase());
}

if (typeof value === "number") {
  console.log(value.toLocaleString());
}

if (typeof value === "boolean") {
  console.log(value);
}

// Array.isArray();

let user3: User | null = null;

user3 = {
  id: 2,
  name: "James",
  age: 30
}

if (user3 === null) {
  console.log(user3);
}

if (user3 !== null) {
  console.log(user3);
}

if (user3) {} // true, "...", []

if (!user) {} // false, "", null, undefined, NaN
