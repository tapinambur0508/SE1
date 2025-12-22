let value: unknown;

(value as string).toLowerCase();

type User = {
  id: number;
  name: string;
  age: number;
};

function parseJson(json: string): unknown {
  return JSON.parse(json);
}

const user1 = parseJson('{ "id": 1, "name": "Dave", age: 20 }') as User;
user1.name;

const user2 = parseJson("1") as User;
user2.name; // Runtime error
