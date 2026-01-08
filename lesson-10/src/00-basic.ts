type User = {
  id: string;
  name: string;
  age: number;
};

const user: User = {
  id: "cf25ce31-8ad5-436d-9ca9-11f32920946f",
  name: "Dave",
  age: 20,
};

function getUserById(id: User["id"]): User | null {
  return user;
}

getUserById("cf25ce31-8ad5-436d-9ca9-11f32920946f");
