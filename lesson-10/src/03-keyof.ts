type User = {
  id: string;
  name: string;
  age: number;
};

type UserKeys = keyof User;

const user: User = {
  id: "cf25ce31-8ad5-436d-9ca9-11f32920946f",
  name: "Dave",
  age: 20,
};

function getUserProperty(user: User, property: UserKeys) {
  return user[property];
}

getUserProperty(user, "age"); // 20

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProperty(user, "age"); // 20
const name = getProperty(user, "name");
name.toUpperCase();

type Order = {
  id: string;
  price: number;
};

const order: Order = {
  id: "16a574cb-7fb6-43e6-8906-a54332bacb80",
  price: 100,
};

const price = getProperty(order, "price");

const products = [
  {
    id: 1,
    title: "Phone",
    price: 500,
  },
  {
    id: 2,
    title: "Laptop",
    price: 1500,
  },
];

function pluck<T, K extends keyof T>(arr: T[], key: K) {
  return arr.map((item) => item[key]);
}

pluck(products, "title"); // ["Phone", "Laptop"]
pluck(products, "id"); // [1, 2]
