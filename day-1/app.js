const fs = require("fs");
const depths = fs.readFileSync("input.txt").toString().split("\n");

for (let i in depths) {
  console.log(depths[i]);
}
