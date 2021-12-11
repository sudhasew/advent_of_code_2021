const fs = require("fs");
//const { resourceLimits } = require("worker_threads");
const depths = fs.readFileSync("input.txt").toString().split("\n");

//PART ONE
let x = 0;
let y = 0;

for (let i = 0; i < depths.length; i++) {
  let command = depths[i];
  let inputCommand = command.split(" ");
  let input = inputCommand[0];
  num = inputCommand[1];
  if (input == "forward") {
    x = x + parseInt(num);
    y = y;
    console.log("forwardOne", x, y);
  } else if (input == "down") {
    x = x;
    y = y - parseInt(num);
    console.log("downOne", x, y);
  } else if (input == "up") {
    x = x;
    y = y + parseInt(num);
    console.log("upOne", x, y);
  }
}
console.log(Math.abs(x));
console.log(Math.abs(y));
let z = Math.abs(x) * Math.abs(y);
console.log(z);

// PART TWO
let x2 = 0;
let aim = 0;
let depth = 0;
for (let i = 0; i < depths.length; i++) {
  let command = depths[i];
  let inputCommand = command.split(" ");
  let input = inputCommand[0];
  console.log("here", inputCommand);
  num = inputCommand[1];
  if (input == "down") {
    aim = aim + parseInt(num);
  } else if (input == "up") {
    aim = aim - parseInt(num);
  } else if (input == "forward") {
    x2 = x2 + parseInt(num);
    let aimNum = parseInt(aim) * parseInt(num);
    depth = depth + aimNum;
  }
}
console.log("x2 :", x2);
console.log("depth :", depth);
console.log("final :", parseInt(x2) * parseInt(depth));
