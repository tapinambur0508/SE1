type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Square | Rectangle;

function calculateArea(shape: Shape): number {
  // switch (shape.kind) {
  //   case "circle":
  //     return Math.PI * shape.radius ** 2;
  //   case "square":
  //     return shape.sideLength ** 2;
  //   case "rectangle":
  //       return shape.width * shape.height;
  //   default:
  //     const _exhaustiveCheck: never = shape;
  //     return _exhaustiveCheck;
  // }

  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }

  if (shape.kind === "square") {
    return shape.sideLength ** 2;
  }

  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }

  const _exhaustiveCheck: never = shape;
  return _exhaustiveCheck;
}
