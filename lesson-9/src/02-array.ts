// let arr: number[] = [1, 2, 3, 4, 5];
let arr: Array<number> = [1, 2, 3, 4, 5];

// let users: Array<{id: number, name: string}> = [{id: 1, name: "Dave"}];
let users: { id: number; name: string }[] = [{ id: 1, name: "Dave" }];

// let matrix: (number[])[] = [[1, 2], [2, 3], [3, 3]];
let matrix: Array<Array<number>> = [
  [1, 2],
  [2, 3],
  [3, 3],
];

type User = {
  id: number;
  name: string;
};

function first<T>(arr: Array<T>): T {
  // first<T>(arr: T[]): T
  return arr[0];
}

first([1, 2, 3]); // 1, "number";
first<string>(["a", "b", "c"]); // "a", "string";
const user = first<User>([
  { id: 1, name: "Dave" },
  { id: 2, name: "Mary" },
]); // { id: 1, name: "Dave" }, "object";
console.log(user.name); // "Dave";

function getLength<T>(arr: T[]): number {
  return arr.length;
}

getLength<number>([1, 2, 3]); // 3
getLength<string>(["a", "b", "c"]); // 3
getLength<User>([
  { id: 1, name: "Dave" },
  { id: 2, name: "Mary" },
]); // 2
