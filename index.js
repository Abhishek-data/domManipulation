// GetElement by class name


const items = document.getElementsByClassName('list-group-item')
console.log(items[1]);
items[1].textContent = 'hello';
items[1].style.backgroundColor = 'green';
for(i=0; i <items.length; i++) {
    items[i].style.fontWeight = 'bold';
}

