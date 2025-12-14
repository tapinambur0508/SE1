type Person = {
  id: number;
  name: string;
}

type Employee = {
  id: number;
  company: string;
}

type Worker = Person & Employee;

let worker1: Worker = {
  id: 1,
  name: "Dave",
  company: "Google",
}

type ResponseMeta = {
  code: 200 | 404 | 500;
  status: "success" | "error";
}

type User = {
  id: number;
  name: string;
  age: number;
}

type UserResponse = ResponseMeta & {
  data: User
}

let res: UserResponse = {
  code: 200,
  status: "success",
  data: {
    id: 1,
    name: "Richard",
    age: 35,
  }
}
