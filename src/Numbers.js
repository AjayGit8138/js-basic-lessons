/* eslint-disable semi */
const num = 100;
const num1 = 100.55;
console.log(typeof num);
console.log(typeof num1);
console.log("10"-"5");
console.log(Math.round(2.2));
console.log(Math.ceil(2.4));
console.log(Math.floor(2.6));
console.log(Math.random());

const sweet = 20;
const kid = 3;
console.log(Math.floor(sweet/kid));
console.log(sweet % kid);
let x = 2 ** 3;
console.log(x);
x = Math.pow(2,3);
console.log(x);
console.log(0.1 + 0.2);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
let res = Number.isInteger(x);
console.log(`type:${res}`);
let y = "abcd";
let res1 = Number.isInteger(y);
console.log(`type is a interger:${res1}`);
let flag = true;
res1 = (typeof y === 'string');
console.log(`is a string:${res1}`);
let result = (typeof flag === 'boolean');
console.log(`is boolean:${result}`);
let array = [1,2,3,4,5];
result = (typeof array === 'object');
console.log(`is object:${result}`);
