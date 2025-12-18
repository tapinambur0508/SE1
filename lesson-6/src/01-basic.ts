const value: string | number = "Hello";

value.toUpperCase();

function formatValue(value: string | number | boolean): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toFixed(2);
  } else {
    return `${value}`;
  }
}

formatValue("Hello"); // "HELLO"
formatValue(123.422); // "123.42"
formatValue(true); // "true"

typeof value; // "string"
// | "number"
// | "boolean"
// | "bigint"
// | "symbol"
// | "undefined"
// | "object"
// | "function";
