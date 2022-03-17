/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable space-before-blocks */
/* eslint-disable semi */
// const o = new Object();
// const a = new Array();

// function getchild (parent)
//  {
//     if (parent == null) throw TypeError();
//       return Object.create(parent);
//  }
// const d = new Date();
// const f = function (){
//     // console.log('The Cow jumped over The Moon');
// }
// // console.log("Date = " + d);
// const o = Object.create({ x: 200, y: 300 });
// // console.log(`x=` + o.x + `y=` + o.y);
// // console.log(o);
// const o1 = Object.create(null);
// const o2 = Object.create(Object.prototype);
// // console.log(o2);
// // console.log(o1);

// let o4 = { x: "don't change this value" };
// // console.log(o4.x);
// o4 = null;
// // let p = getchild(o4);
// // console.log(p);
// Object.prototype = 0;
// // console.log(Object);
// let o5 = {};
// // f();
// console.log(o5);
// o5.x = 100;
// let p = getchild(o5);
// p.y = 200;
// console.log(p);
// let q = getchild(p);
// q.z = 400;
// console.log(q);
// console.log("q.x+q.y+q.z" + (q.x + q.y + q.z));
// console.log("p.x+p.y" + (p.x + p.y));
// console.log("o5.x" + (o5.x));

// let len = undefined;
// if(book){
//     if(book.subtitle){
//         len=book.subtitle.length;
//         console.log(len);
//     }
//     else
//         console.log("book.subtile undefined:");
// }
// else
//     console.log("Book is Null");

// len = book && book.subtitle && book.subtitle.length;
// if(len) console.log(len);
// console.log(book.author);
// delete book.author;
// console.log(book.author);

// console.log(book["main title"]);
// delete book["main title"];
// console.log(book["main title"]);

//   let o6 = {x:100};
//   console.log(o6.x);
//   delete o6.x;
//   console.log(o6.x);
//   console.log(o6.toString);

const book = {
    'main title': 'Java Script', // property names include spaces
    subtitle: 'The definitive Guide',
    for: 'all audiences', // resreved keyword
    author: {
      first: 'Donald',
      last: 'Duck'
    }
  };
  let len;
  // book = null;
  // if (book) {
  //   if (book.subtitles) {
  //     len = book.subtitle.length;
  //     console.log(len);
  //   } else {
  //     console.log('book.subtitle undefined:');
  //   }
  // } else {
  //   console.log('book is null');
  // }
  
  // eslint-disable-next-line prefer-const
  len = book && book.subtitle && book.subtitle.length;
  if (len) console.log(len);
  
  console.log(book.author);
  delete book.author;
  console.log(book.author);
  
  console.log(book["main title"]);
  delete book["main title"];
  console.log(book["main title"]);
  
  const o6 = { x: 100 };
  console.log(o6.x);
  delete o6.x;
  console.log(o6.x);
  console.log(o6.toString);
  delete o6.toString;

  delete Object.prototype;
  let a = 1;
  delete this.a;
  function f1 () {}
  delete this.f1;