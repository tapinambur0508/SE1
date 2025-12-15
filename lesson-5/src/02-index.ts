type User = {
  username: string;
  age: number;
};

const user: User = {
  username: "Dave",
  age: 20,
};

// type Scores = {
//   [key: string]: number;
// }

// const scores: Scores = {
//   Mary: 10,
//   Dave: 20,
//   Richard: 25,
// }

type Scores = {
  gameId: number;
  [key: string]: number;
};

const scores: Scores = {
  gameId: 1,
  Mary: 1,
  Dave: 0,
  Richard: 2,
};
