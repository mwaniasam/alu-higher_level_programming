#!/usr/bin/node
function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
const number = process.argv[2];
const result = factorial(Number(number));
console.log(result);
