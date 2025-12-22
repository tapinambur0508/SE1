let value: unknown;

value = "Hello";
value = 123;

if (typeof value === "string") {
  console.log(value.toLowerCase());
}

function parseJson(json: string): unknown {
  return JSON.parse(json);
}

let result = parseJson('{"x": 1}');

if (typeof result === "string") {
  console.log(result.toUpperCase());
}

result = parseJson("1");

if (typeof result === "number") {
  result.toFixed(2);
}
