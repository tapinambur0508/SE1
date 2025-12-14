let sum: (a: number, b: number) => number;
sum = (a, b) => a + b;

sum(1, 2);
sum(1, "hello");

type Logging = (msg: string) => void;

const errorLog: Logging = (error) => {
  console.error(error);
}

const infoLog: Logging = (info) => {
  console.info(info);
}
