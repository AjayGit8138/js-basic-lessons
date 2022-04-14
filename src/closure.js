/* eslint-disable space-infix-ops */
/* eslint-disable eol-last */
/* eslint-disable semi */
function dosometask()
{
    const x =100;
    const y =20;
    console.log('x:' + x + 'y:' + y);
}
dosometask();

function outer ()
{
    const outervar = "Hi i'm a Outer variable";
    // console.log(outervar);
    function inner()
    {
        const innervar = "Hi i'm a inner variable";
        console.log(innervar);
        console.log(outervar);
    }
    return inner;

}
const innercal = outer();
innercal();

function creategreeting(greeting = '')
{
    const greet = greeting.toUpperCase();
    return function(name)
    {
        return `${greet} ${name}`
    } 
}
const callgreet = creategreeting('call from outer'+'ajay');
console.log(callgreet('this is for innerfunction'+'ajay'));
const sayhello = creategreeting('hi');
const sayvanakkam = creategreeting('vanakkam');
console.log(sayhello('ajay'));
console.log(sayvanakkam('arun'));
console.log(sayvanakkam('rajkumar'));

function createGame(gameName) {
    let score = 0;
    return function win() {
      score++;
      return `Your name ${gameName} score is ${score}`;
    }
  }
const callgame = createGame('gta');
console.log(callgame());
const hockeygame = createGame('hockey');
const soccergame = createGame('soccer');
hockeygame();
console.log(hockeygame());
console.log(hockeygame());
console.log(soccergame());
console.log(soccergame());
console.log(soccergame());