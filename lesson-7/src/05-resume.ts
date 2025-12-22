// Safe
let value: unknown = "Hello";

if (typeof value === "string") {
  let string = value as string;
  console.log(string.toUpperCase());
}

const usernameElement = document.getElementById("username") as HTMLInputElement;
console.log(usernameElement.value);

const buttonElement = document.getElementById("submit") as HTMLButtonElement;
buttonElement.disabled = true;

type User = {
  id: number;
  name: string;
};

const user1: User = { id: 1, name: "Dave" };
const json = JSON.stringify(user1);
const user2 = JSON.parse(json) as User;
console.log(user2.name);

// Unsafe
{
  let num: number = 15;
  let str: string = num as unknown as string; // Add comment
  console.log(str.toUpperCase()); // Runtime error
  console.log(str, typeof str); // 15 "number"
}

{
  let num: number = 15;
  let user = num as unknown as User;
  console.log(user.name); // Runtime error;
}

{
  const element = document.getElementById("test") as HTMLButtonElement;
  element.disabled = true;
}
