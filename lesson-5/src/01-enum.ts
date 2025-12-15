enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

const move: Direction = Direction.Left;
console.log(move); // 2

enum Status {
  Success = 200,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500,
}

const responseStatus: Status = Status.Success;
console.log(responseStatus); // 200

enum Process {
  Pending = "pending",
  Processing = "processing",
  Failure = "failure",
  Success = "Success",
}

const process: Process = Process.Pending;
console.log(process); // "pending"
