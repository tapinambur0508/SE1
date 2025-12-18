function greeting(name: string, age?: number) {
  if (typeof age === "number") {
    return `I am ${name}. I am ${age} years old`;
  } else {
    return `I am ${name}`;
  }
}

greeting("Dave");
greeting("Mary", 22);

type User = {
  name: string;
  age: number;
  role?: string;
};

function getUserRole(user: User): string {
  // if (typeof user.role === "undefined") {
  //   return "UNKNOWN";
  // } else {
  //   return user.role.toUpperCase();
  // }

  return user.role?.toUpperCase() ?? "UNKNOWN";
}
