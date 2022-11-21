const form = document.getElementById('addForm');
const itemlist = document.getElementById('items');
const filter = document.getElementById('filter');
// for submit events
form.addEventListener('submit', additem);
itemlist.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);
// additem funtion
function additem(e){
    e.preventDefault();
    //get input value
    const newitem = document.getElementById('item');
    const newitem2 = document.getElementById('item2');
    // create new li element
    const li = document.createElement('li');
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newitem.value));
    li.appendChild(document.createTextNode(newitem2.value));
    //create del button
    const deleteBtn = document.createElement('button');
    // add class to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    //append li to list
    itemlist.appendChild(li)
}

function removeItem(e) {
    e.preventDefault;
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            const li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

// filter items
function filterItems(e) {
    //convert text to lowercase
    const text = e.target.value.toLowerCase();
    const items = itemlist.getElementsByTagName('li');
    //convert to aray
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    })



}


