/* eslint-disable no-array-constructor */
/* eslint-disable comma-spacing */
/* eslint-disable space-before-blocks */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-new-object */
/* eslint-disable no-var */
/* eslint-disable semi */
var cody = new Object();
cody.firstname = 'Ajay';
cody.age = 35;
cody.location = 'Madurai';
cody.gender = 'Male';
cody.getgender = function () { return cody.gender };
console.log(cody.getgender());
console.log(cody);

const myobject = new Object();
myobject['0'] = 'f';
myobject['1'] = 'r';
myobject['2'] = 'i';
myobject['3'] = 'e';
console.log(myobject);
const news = new String('A war between Russia and Ukraine');
console.log(news);

const Objectone = function (living, age, gender){
  this.location = living;
  this.age = age;
  this.gender = gender;
  this.getgender = function (){ return this.gender };
}
const smith = new Objectone('madurai','35','male');
console.log(smith);

const mynumber = new Number(35);
const mystring = new String('Madurai');
const myBoolean = new Boolean(false);
const myobjecttwo = new Object();
const myarray = new Array();
const myfunction = new Function("x","y","return x*y");
const myDate = new Date();
const myRegExp = new RegExp('\bt[a-z]+\b');
const myerror = new Error('sorry');
console.log(mynumber.constructor);
console.log(mystring.constructor);
console.log(myBoolean.constructor);
console.log(myobjecttwo.constructor);
console.log(myarray.constructor);
console.log(myfunction.constructor);
console.log(myDate.constructor);
console.log(myRegExp.constructor);
console.log(myerror.constructor);
