const fs = require("fs");
const { resourceLimits } = require("worker_threads");
const depths = fs.readFileSync("input.txt").toString().split("\n");

let x = 0;
let y = 0;

for (let i = 0; i < depths.length; i++) {
  let command = depths[i];
  let inputCommand = command.split(" ");
  let input = inputCommand[0];
  num = inputCommand[1];
  console.log(input);
  console.log(num);
  if (input == "forward") {
    x = x + parseInt(num);
    y = y;
    console.log(x, y);
  } else if (input == "down") {
    x = x;
    y = y - parseInt(num);
    console.log(x, y);
  } else if (input == "up") {
    x = x;
    y = y + parseInt(num);
    console.log(x, y);
  }
}
console.log(Math.abs(x));
console.log(Math.abs(y));
let z = Math.abs(x) * Math.abs(y);
console.log(z);
// for (i in depths) {
//   console.log(depths[i]);
// }
