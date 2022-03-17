/* eslint-disable space-before-blocks */
/* eslint-disable space-in-parens */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-spacing */
/* eslint-disable eol-last */
/* eslint-disable semi */
const calc = Math.max(10 , 12,35,65,25,85);
console.log(calc);
const calcres = Math.min(10 , 12);
console.log(calcres);
const intval = parseInt('1456ajay');
console.log(intval);
const date = Date.now();
console.log(date);

function calculation (bill,taxrate)
{
    const invoice = bill + bill * taxrate; 
    console.log(invoice);
}
calculation(100,0.13);

function yell (name = 'siily goose') {
    return `Hey ${name.toUpperCase()}`
}
const greetings = yell();
console.log(greetings);

function calculatebill (bilamount,taxrate = 0.13,tiprate = 0.15) {
    console.log('bilamount' + 'taxrate' + 'tiprate');
    const total = bilamount + bilamount * taxrate + bilamount * tiprate;
    console.log(total);
}
calculatebill(100);
calculatebill(100,0.66);
calculatebill(100,undefined,0.66);

const doc = doctorize('ajay');
console.log(doc);
function doctorize(firstname)
{
    return `${firstname}`
}

const annon = function() {
    console.log("hai");
}
annon();

// arrow function
const inchtocm = inches => {
    return inches * 2.54;
}
const res = inchtocm(10);
console.log(res);

const funcA = ()=>{
    console.log('hai');
}
funcA();

const add = ( a,b = 3) => a * b;
console.log(add);
const inchval = inches=>inches * 2.54;
console.log(inchval(10));

const makeperson = (first,last) =>( {name: `${first} ${last}`,age: 0});
const person = makeperson('ajay','prasath');
console.log(person);

// self calling function
(function(age){
    console.log(`${age}`);
})(10);

const employee = {
        name:'ajay prasath',
        sayHi: function(){
            console.log(`employee contains:${this.name}`);
            return `${this.name}`;
        },
        printing: ()=>{
            console.log("Hai Emploayee");
        },
        yellhi()
        {
            console.log("Touppercase"+`${this.name.toUpperCase()}`);
        }
};
employee.sayHi();
employee.printing();
employee.yellhi();