/* eslint-disable semi */
/* eslint-disable space-before-blocks */
const btn1 = document.querySelector('.btn');
const btntwo = document.querySelector('.btntwo');

function handleclick()
{
    console.log('I got clicked');
}

btn1.addEventListener('click' , handleclick);

const hooray = ()=> console.log('🤣🤣🤣🤣🤣🤣');
btntwo.addEventListener('click',hooray);

btn1.removeEventListener('click',handleclick);

const buybutton = document.querySelectorAll('button.buy');

function handlebuybuttonclick(event)
{
    console.log("its a buy button");
    const evtbtn = event.target;
    console.log(evtbtn.textContent);
    console.log('Price' + parseFloat(event.target.dataset.price));
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);
    // event.stopPropagation();
}

buybutton.forEach(function (buybtn){
    buybtn.addEventListener('click',handlebuybuttonclick);
})

const photo = document.querySelector('.photo');
photo.addEventListener('mouseenter',e=>{
    console.log(e.currentTarget);
    console.log(this);
})

window.addEventListener('click',
function(e)
{
    console.log('window is clicked');
    e.stopPropagation();
    console.log('bubbles'+ e.bubbles)
},
{
    capture:true
});