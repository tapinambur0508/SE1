type User = {
  id: number;
  name: string;
  age: number;
};

type Status =
  | { type: "success"; data: User }
  | { type: "error"; message: string };

let status: Status = {
  type: "success",
  data: { id: 1, name: "Dave", age: 20 },
};

if (status.type === "success") {
  console.log(status.data);
}

status = {
  type: "error",
  message: "Something went wrong",
};

if (status.type === "error") {
  console.log(status.message);
}

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; a: number; b: number; c: number };

function getShape(): Shape {
  return { kind: "circle", radius: 10 };
}

let shape: Shape = getShape();

switch (shape.kind) {
  // case "circle":
  //   console.log({ radius: shape.radius });
  //   break;
  // case "square":
  //   console.log({ size: shape.size });
  //   break;
  // case "rectangle":
  //   console.log({ width: shape.width, height: shape.width });
  //   break;
  case "circle":
    console.log({ radius: shape.radius });
    break;
  case "square":
    console.log({ size: shape.size });
    break;
  case "rectangle":
    console.log({ width: shape.width, height: shape.height });
    break;
  default:
    console.log("Figure not found");
}
