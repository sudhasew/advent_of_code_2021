const fs = require("fs");
const depths = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));
let counter = 0;
for (let i = 1; i < depths.length; i++) {
  const last = depths[i - 1];
  const current = depths[i];
  if (current > last) {
    counter++;
  }
}
console.log(counter);

// for (let i in depths) {
//   console.log(depths[i]);
// }
