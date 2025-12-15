type Role = "admin" | "user";

type User = {
  username: string;
  age: number;
  role: Role;
};

const user: User = {
  username: "dave",
  age: 10,
  role: "admin",
};

const key: keyof User = "role"; // "username" | "age" | "role";

function getProperty(user: User, key: keyof User) {
  return user[key];
}

getProperty(user, "age"); // 10
