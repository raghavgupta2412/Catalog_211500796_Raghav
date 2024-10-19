const fs = require("fs");

function parseInput(jsonFilePath) {
  const data = fs.readFileSync(jsonFilePath);
  const parsedData = JSON.parse(data);
  return parsedData;
}

function decodeValue(base, value) {
  return parseInt(value, base);
}

function lagrangeInterpolation(points, k) {
  let secret = 0;

  for (let i = 0; i < k; i++) {
    let xi = points[i].x;
    let yi = points[i].y;

    let li = 1;
    for (let j = 0; j < k; j++) {
      if (i !== j) {
        let xj = points[j].x;
        li *= (0 - xj) / (xi - xj);
      }
    }

    secret += yi * li;
  }

  return Math.round(secret);
}

function main(s, t) {
  //Reading the testcases
  const inputFilePath = s;
  const data = parseInput(inputFilePath);

  const n = data.keys.n;
  const k = data.keys.k;

  //   Decode the Y Values
  let points = [];
  for (let i = 1; i <= n; i++) {
    if (data[i]) {
      const base = parseInt(data[i].base);
      const value = data[i].value;
      const x = parseInt(i);
      const y = decodeValue(base, value);
      points.push({ x, y });
    }
  }

  //   Find the Secret {C}
  const secret = lagrangeInterpolation(points, k);

  if (t == 1) {
    console.log(`The secret (constant term c) is: ${secret} for 1st TestCase`);
  } else {
    console.log(`The secret (constant term c) is: ${secret} for 2st TestCase`);
  }
}

//printing the both testcases same time

main("input1.json", 1);
main("input2.json", 2);
