/* eslint-disable semi */
/* eslint-disable indent */
const object = {
    firstname: 'ajay',
    lastname: 'prasath',
    age: '28'
}
console.log(object.firstname);
console.log(object.lastname);
console.log(object.age);
object.firstname = 'Tom';
object.lastname = 'Jerry';
console.log(object.firstname);
console.log(object.lastname);
object.age = null;
console.log(object.age);

// const empty ={};
// const point = {x:10,y:50};
// const pointt = {x:point.x,y:point.y};

const person = {
    'first name': 'Ajay prasath',
    'location from': 'Madurai',
     character: {
         speech: 'moderate',
         action: 'moderate'
     }
}
console.log(person['first name']);
console.log(person['location from']);
console.log(person.character.speech);
console.log(person.character.action);
// console.log(person.first name);
