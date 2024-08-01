const dets = require("./expoVar");

const maths = require("./module");
// const maths2 = require("./exportObj");
const { getDiv } = require("./exportObj");

// console.log(maths2); // { add: [Function: getSum], sub: [Function: getSub] }

console.log("Sum = ", maths.add(1, 2)); // 3
console.log("Subtraction = ", maths.sub(1, 2)); // -1

// console.log("Prod = ", maths2.getProd(1, 2)); // 2
// console.log("Div = ", maths2.getDiv(1, 2)); // 0.5
console.log("Div = ", getDiv(1, 2)); // 0.5


console.log("dets = ", dets);
console.log("dets.myName = ", dets.myName);
console.log("dets.myNum = ", dets.myNum);
