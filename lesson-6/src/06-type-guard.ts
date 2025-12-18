function isString(value: unknown): value is string {
  return typeof value === "string";
}

function formatValue(value: string | number): string {
  if (isString(value)) {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}

class Bird {
  fly() {
    console.log("Flying...");
  }
}

class Fish {
  swim() {
    console.log("Swimming...");
  }
}

function isBird(value: unknown): value is Bird {
  return value instanceof Bird;
}

function move(animal: Bird | Fish) {
  if (isBird(animal)) {
    animal.fly();
  } else {
    animal.swim();
  }
}

type User = {
  name: string;
  age: number;
};

type Admin = {
  name: string;
  age: number;
  permissions: string[];
};

function isAdmin(value: unknown): value is Admin {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    "age" in value &&
    "permission" in value &&
    Array.isArray(value["permission"])
  );
}

function getPermisions(person: User | Admin): string[] | undefined {
  if (isAdmin(person)) {
    return person.permissions;
  } else {
    return undefined;
  }
}
