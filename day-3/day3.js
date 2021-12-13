const fs = require("fs");
const depths = fs.readFileSync("input.txt").toString().split("\n");

// Reading length of first depth (12)
const length = depths[0].length;
const zeros = Array(length).fill(0);

//  Filling array with 0. [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const ones = Array(length).fill(0);
for (const depth of depths) {
  const bits = [...depth];
  bits.forEach((bit, index) => {
    if (bit === "0") {
      zeros[index]++;
    } else {
      ones[index]++;
    }
  });
}
let gammaRate = "";
for (let i = 0; i < length; i++) {
  let bit = 0;
  if (ones[i] > zeros[i]) {
    bit = 1;
  }
  gammaRate += bit;
}
let epsilonRate = "";
for (let i = 0; i < length; i++) {
  let bit = 0;
  if (ones[i] < zeros[i]) {
    bit = 1;
  }
  epsilonRate += bit;
}
// calculating power consumption.
// power consumption = gammaRate * epsilonRate
// console.log(parseInt(gammaRate, 2)); // GIVES 1508
// console.log(parseInt(epsilonRate, 2));// GIVES 2587
console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));
