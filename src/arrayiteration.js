const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

    const students = [
      {
        id: '11ce',
        first_name: 'Dall',
        last_name: 'Puckring',
      },
      {
        id: '2958',
        first_name: 'Margarete',
        last_name: 'Brandi',
      },
      {
        id: '565a',
        first_name: 'Bendicty',
        last_name: 'Woodage',
      },
      {
        id: '3a16',
        first_name: 'Micki',
        last_name: 'Mattes',
      },
      {
        id: 'f396',
        first_name: 'Flory',
        last_name: 'Gladeche',
      },
      {
        id: 'de5f',
        first_name: 'Jamill',
        last_name: 'Emilien',
      },
      {
        id: '54cb',
        first_name: 'Brett',
        last_name: 'Aizikowitz',
      },
      {
        id: '9135',
        first_name: 'Lorry',
        last_name: 'Smallman',
      },
      {
        id: '978f',
        first_name: 'Gilly',
        last_name: 'Flott',
      },
    ];

    const people = [
      {
        birthday: 'April 22, 1993',
        names: {
          first: 'Keith',
          last: 'Buckley'
        }
      },
      {
        birthday: 'January 3, 1975',
        names: {
          first: 'Larry',
          last: 'Heep'
        }
      },
      {
        birthday: 'February 12, 1944',
        names: {
          first: 'Linda',
          last: 'Bermeer'
        }
      }
    ];


    const buns = ['egg', 'wonder', 'brioche'];

    const meats = {
      beyond: 10,
      beef: 5,
      pork: 7
    };

    const prices = {
      hotDog: 453,
      burger: 765,
      sausage: 634,
      corn: 234,
    };

    const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

    const feedback = [
      { comment: 'Love the burgs', rating: 4 },
      { comment: 'Horrible Service', rating: 2 },
      { comment: 'Smoothies are great, liked the burger too', rating: 5 },
      { comment: 'Ambiance needs work', rating: 3 },
      { comment: 'I DONT LIKE BURGERS', rating: 1 },
    ];

    const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

    const inventory = [
      { type: 'shirt', price: 4000 },
      { type: 'pants', price: 4532 },
      { type: 'socks', price: 234 },
      { type: 'shirt', price: 2343 },
      { type: 'pants', price: 2343 },
      { type: 'socks', price: 542 },
      { type: 'pants', price: 123 },
    ];

function logItemsinArray(item,index,originalarray)
{
    const nextitem = originalarray[index+1];
    const previtem = originalarray[index-1];
    console.log(item);
    previtem?console.log('previtem'+ previtem):null;
    nextitem?console.log('nextitem'+nextitem):null;

    index === originalarray.length-1
    ?console.log('Goodbye') 
    :console.log('Getting the next item');
}

// console.log(toppings);
// toppings.forEach(logItemsinArray);
// console.log(orderTotals);
// orderTotals.forEach(logItemsinArray);

function displayToppings(item)
{
    console.log('currentitem'+item);
}
// toppings.forEach(displayToppings);
toppings.map(displayToppings);
function addarms(face)
{
    return `${face}`;
}
const toys = faces.map(addarms);
console.log(toys);
function incbypercent(item)
{
    return item + ((item*25)/100);
}
const inctotals = orderTotals.map(incbypercent);
console.log(inctotals);

function tallynumbers(pvtnum,crntnum)
{
    console.log(`the total so far is ${pvtnum}`);
    console.log(`The current num is ${crntnum}`);
    return pvtnum + crntnum;
}
const tally = orderTotals.reduce(tallynumbers,0);
console.log(tally);