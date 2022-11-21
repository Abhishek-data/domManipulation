const form = document.getElementById('addForm');
const itemlist = document.getElementById('items');

// for submit events
form.addEventListener('submit', additem);
itemlist.addEventListener('click', removeItem);
// additem funtion
function additem(e){
    e.preventDefault();
    //get input value
    const newitem = document.getElementById('item');
    // create new li element
    const li = document.createElement('li');
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newitem.value));
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


