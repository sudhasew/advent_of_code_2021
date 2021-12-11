const fs = require("fs");
const depths = fs.readFileSync("input.txt").toString().split("\n");

let forward = 0;
let down = 0;
let up = 0;
for (i in depths) {
  console.log(depths[i]);
}
