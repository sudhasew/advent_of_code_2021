const fs = require("fs");
var bingoSubsystems = fs.readFileSync("input.txt").toString().split("\n");
for (let bingoSubsystem of bingoSubsystems) {
  console.log(bingoSubsystem);
}
let randomNumbers = Math.floor(Math.random() * 27);
console.log(randomNumbers);
