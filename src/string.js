/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable quotes */
const myname = 'Hello my Name is Ajay'
const middele = 'gabbar'
const last = 'singh'
console.log(myname)
console.log(middele)
console.log(last)
const sentence = 'shoes\'s "cool"'
console.log(sentence)
const sentenceone = "she's so cool"
console.log(sentenceone)
const sentencetwo = `'shoes\'s cool'`;
console.log(sentencetwo);
const song = `I like 
harris and 
arr songs`;

const string3 ='Hi im ajay.' + 'Now you are learning';
console.log(string3);
const string4 ='Hi im ajay.${myname}Now you are learning';
console.log(string4);
const html = `<div>
                <p>${myname}</p>
                <p>hello</p>`;
console.log(html);
document.body.innerHTML = html;