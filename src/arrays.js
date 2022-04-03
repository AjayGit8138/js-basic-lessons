const names = ['john' , 'sam' , 'Peter'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length - 1]);
names.push('Ajayprasath');
console.log('After push:'+names);
const names2 = [...names,'newarray'];
console.log('names2:'+names2);
names.unshift('poppy');
console.log('unshift:'+names);
const names3 = ['raj',...names];
console.log(names3);

// ['binchai','miele]
const bikes = ['biranchi','miel','panasonic','miyata','Re'];
const b1 = [...bikes.slice(0,2)];
console.log('from B1:'+ b1);

const b2 = [...bikes.slice(2)];
console.log(b2)

const newBkes=[
    ...bikes.slice(2,2),
    'benotto',
    ...bikes.slice(2)
]
console.log('newbikes:' + newBkes);
const newbikes2 = [
    ...newBkes.slice(0,2),
    ...newBkes.slice(4)
]
console.log('newbikes2:'+newbikes2);

const indexofsam = names.findIndex(name => name === 'sam');
console.log(names);
console.log('IndexofSam:'+indexofsam);


function delname(findname)
{
  var indexofval = names.findIndex(name => name === findname);
  console.log('Indexofval:'+indexofval);
  var newdeleted = [...names.slice(0,indexofval),...names.slice(indexofval+1)];
  
  console.log(newdeleted);
    
}
delname('Ajayprasath');

const numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
numbers.splice(3,2);
// (method)Array<number>,splice(start:number,deleteCount?:number)
// Mutation Method - modifies/deletes the value in th source array
//from the 3rs index delete the next 2 values
console.log(numbers);
const pizzaslice = numbers.slice(2,4);
// (method)Array<number>.splice
console.log('pizzaslice:'+ pizzaslice);
console.log('Original Numbers:'+numbers);
numbers.reverse();
// anytime you want to use a mutation method and NOT mutate the original array
console.log(numbers);
const numberreversed = [...numbers].reverse();
console.log(numberreversed);
