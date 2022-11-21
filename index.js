const itemlist = document.querySelector('#items');
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = 'red';
// console.log(itemlist.parentNode.parentNode.parentNode.parentNode);

// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = 'red';
// console.log(itemlist.parentElement.parentElement.parentElement);
// childnode
// console.log(itemlist.childNodes);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = 'blue';

// //first child
// console.log(itemlist.firstChild)
// // first elementchild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'gulabjamun';

// // lasst elementchild
// console.log(itemlist.lastChild)
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'gulabjamun';
// itemlist.lastChild.textContent = 'gulabjamun';
//next sibling
// console.log(itemlist.nextSibling)
// console.log(itemlist.nextElementSibling)
// console.log(itemlist.previousSibling);
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = 'green'
// createElement


//create a div
const newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'hello div');


// create text node
const newDivText = document.createTextNode('hello world');
//add text to div
newDiv.appendChild(newDivText);

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px'
container.insertBefore(newDiv, h1);


