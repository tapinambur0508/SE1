type APIResponse<T = string> = {
  data: T;
  error?: string;
};

const res1: APIResponse = { data: "OK" };
const res2: APIResponse<number> = { data: 200 };

type User = {
  id: string;
  name: string;
  age: 20;
};

const user: User = {
  id: "cf25ce31-8ad5-436d-9ca9-11f32920946f",
  name: "Dave",
  age: 20,
};

function parse<T = unknown>(json: string): T {
  return JSON.parse(json);
}

parse('{"score": 10}');
const parsedUser = parse<User>(JSON.stringify(user));
parsedUser.name;
