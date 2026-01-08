function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("Hello, World!");
getLength([1, 2, 3]); // 3
getLength({ name: "Dave", age: 20, length: 20 }); // 20
getLength(1);
getLength(false);

function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b };
}

// merge(1, 2);
const result = merge({ id: 1 }, { name: "Dave", age: 20 });
result.age; // 20
result.unknown; // Error

type HasId = { id: string };
type HasRole = { role: "Admin" | "User" };
type HasTimestamp = { createdAt: Date; updatedAt: Date };

function print<T extends HasId & HasRole & HasTimestamp>(value: T): string {
  value.id;
  value.role;
  value.createdAt;
  value.updatedAt;
  return `Entity with id ${value.id} at ${value.createdAt.toISOString()}`;
}

print({
  id: "550b4bea-5c0a-4c1e-8128-e5a02193ed0c",
  name: "Alice",
  age: 18,
  role: "Admin",
  createdAt: new Date(),
  updatedAt: new Date(),
});

type PrimitiveKey = string | number;

function toKey<T extends PrimitiveKey>(value: T): string {
  return String(value);
}

toKey("Hello, World!");
toKey(123);
toKey(true);

function upper<T extends PrimitiveKey>(value: T): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  return value.toString();
}

upper("Hello, World");
upper(123);
