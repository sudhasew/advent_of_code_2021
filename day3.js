const fs = require("fs");
var depths = fs.readFileSync("input.txt").toString().split("\n");
var O2depths = fs.readFileSync("input.txt").toString().split("\n");
var co2Depths = fs.readFileSync("input.txt").toString().split("\n");
// Reading length of first depth (12)
const length = depths[0].length;
const zeros = Array(length).fill(0);

//Filling array with 0. [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
//calculating power consumption.
//power consumption = gammaRate * epsilonRate
console.log(parseInt(gammaRate, 2)); // GIVES 1508
console.log(parseInt(epsilonRate, 2)); // GIVES 2587
console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));

// SECOND PART
// OXYGEN GENERATOR
// Declaring the ones and zeros array to empty.

var finalArray = [];
for (let i = 0; i < length; i++) {
  finalArray = getNewDepths(O2depths, i);
  console.log("new depths ", finalArray);
  O2depths = finalArray;
  if (O2depths.length === 1) {
    break;
  }
}
console.log("final array", finalArray);

let oxygenGeneratorRating = parseInt(finalArray, 2);
console.log("o2", oxygenGeneratorRating);
//console.log("o2", parseInt(oxygenGeneratorRating, 2));

//CO2 SCRUBBER RATING
var finalArray2 = [];
for (let j = 0; j < length; j++) {
  finalArray2 = getCo2(co2Depths, j);
  console.log("new co2 depths ", finalArray2);
  co2Depths = finalArray2;
  if (co2Depths.length === 1) {
    break;
  }
}

console.log("final array2", finalArray2);
let CO2ScrubberRating = parseInt(finalArray2, 2);
console.log("co2", CO2ScrubberRating);

let lifeSupportRating = CO2ScrubberRating * oxygenGeneratorRating;
console.log(lifeSupportRating);

function getCo2(co2Depths, index) {
  var onesArray5 = [];
  var zerosArray5 = [];
  var finalArray2 = [];
  console.log("co2 depths", co2Depths);
  console.log(" co2 index", index);
  if (co2Depths.length === 2) {
    for (const depth of co2Depths) {
      const bits = [...depth];
      if (bits[index] === "0") {
        finalArray2.push(depth);
        return finalArray2;
      }
    }
  }
  for (const depth of co2Depths) {
    const bits = [...depth];
    if (bits[index] === "0") {
      zerosArray5.push(depth);
    } else {
      onesArray5.push(depth);
    }
  }
  var newDepths5 = [];
  if (zerosArray5.length < onesArray5.length) {
    newDepths5 = zerosArray5;
    console.log("zeros array", zerosArray5);
  } else {
    newDepths5 = onesArray5;
    console.log("ones array", onesArray5);
  }
  return newDepths5;
}

function getNewDepths(depths, index) {
  var onesArray = [];
  var zerosArray = [];
  var finalArray = [];
  console.log("depths from functions", depths);
  console.log("index from function", index);

  if (depths.length === 2) {
    for (const depth of depths) {
      const bits = [...depth];
      if (bits[index] === "1") {
        finalArray.push(depth);
        return finalArray;
      }
    }
  }

  for (const depth of depths) {
    const bits = [...depth];
    if (bits[index] === "0") {
      onesArray.push(depth);
    } else {
      zerosArray.push(depth);
    }
  }

  //Printing the first array with 1's in the 0's index
  var newDepths = [];
  if (onesArray.length > zerosArray.length) {
    newDepths = onesArray;
    console.log("ones array", onesArray);
  } else {
    newDepths = zerosArray;
    console.log("zeros array", zerosArray);
  }
  return newDepths;
}
