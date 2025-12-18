type Dog = {
  bark: () => void;
};

type Cat = {
  meow: () => void;
};

function makeSound(animal: Dog | Cat): void {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

type User = {
  name: string;
};

type Admin = {
  name: string;
  permissions: string[];
};

function hasAccess(person: User | Admin): boolean {
  if ("permissions" in person) {
    return true;
  } else {
    return false;
  }
}
