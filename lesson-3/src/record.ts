// type Colors = {
//   primary: string;
//   success: string;
//   danger: string;
// }

type Colors = Record<"primary" | "success" | "danger", string>;

const colors: Colors = {
  primary: "blue",
  success: "green",
  danger: "red",
  warning: "yellow"
}