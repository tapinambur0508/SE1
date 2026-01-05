type Dictionary<T> = {
  [key: string]: T;
};

const scores: Dictionary<number> = {
  Alice: 100,
  Bob: 95,
  Charlie: 80,
  Dave: 70,
};

const users: Dictionary<string> = {
  id1: "Alice",
  id2: "Bob",
  id3: "Charlie",
};

type Config<T> = {
  [key: string]: T;
};

const featureFlags: Config<boolean> = {
  darkMode: false,
  beta: true,
};

const settings: Config<string> = {
  theme: "dark",
  language: "uk",
};

type User = {
  id: number;
  name: string;
};

interface UserResponse {
  status: number;
  data: User[];
}

type Order = {
  id: string;
  price: number;
};

interface OrderResponse {
  status: number;
  data: Order[];
}

interface ApiResponse<T> {
  status: number;
  data: T[];
}

const userResponse: ApiResponse<User> = {
  status: 200,
  data: [{ id: 1, name: "Dave" }],
};

userResponse.data[0].name;

const orderResponse: ApiResponse<Order> = {
  status: 200,
  data: [{ id: "62054df9-c829-4041-aac1-ab10368dc1a1", price: 100 }],
};

orderResponse.data[0].price;
