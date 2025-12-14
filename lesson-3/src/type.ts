type Age = number;

let Age = 20;

type IsAdmin = boolean;
type CanEdit = boolean;

const access: [IsAdmin, CanEdit] = [false, true];

const [isAdmin, canEdit] = access;

type ID = string | number;

type User = {
  id: ID;
  name: string;
  age: number;
}

let user1: User = {
  id: "fa4c21e2-68a5-43da-91b1-3daa41ec4810",
  name: "Peter",
  age: 40,
}

let user2: User = {
  id: 2,
  name: "Jeremy",
  age: 60,
}

interface Person {
  id: number;
  name: string;
}

let person1: Person = {
  id: 1,
  name: "Dave"
}

interface AdminPerson extends Person {
  isAdmin: true;
}

let admin1: AdminPerson = {
  id: 2,
  name: "Mary",
  isAdmin: true,
}
