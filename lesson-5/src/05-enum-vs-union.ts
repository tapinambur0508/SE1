enum StatusEnum {
  Success = "success",
  Failure = "failure",
  Pending = "pending",
}

type SttatusUnion = "success" | "failure" | "pending";

const ROLES = {
  Admin: "admin",
  User: "user",
  Guest: "guest",
} as const;

ROLES["Admin"] = "user"; // Error
console.log(ROLES["Admin"]);

const key: keyof typeof ROLES = "User";
console.log(key); // "user";
const value: (typeof ROLES)[keyof typeof ROLES] = "admin";
console.log(value); // "admin";
