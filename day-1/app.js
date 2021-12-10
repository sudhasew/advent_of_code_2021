const fs = require("fs");
const depths = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));
let counter = 0;
for (let i = 1; i < depths.length; i++) {
  if (depths[i] > depths[i - 1]) {
    counter++;
  }
}
console.log(counter);
