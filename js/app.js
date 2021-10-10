document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);

    const deleteAll = document.querySelector('.delete');
    deleteAll.addEventListener('click', handleDeleteAll);
});

const handleFormSubmit = function(event) {
    event.preventDefault();

    const previousItems = document.querySelector('#list');
    const newListItem = document.createElement('li');
    newListItem.classList.add('list-item')

    const title = document.createElement('h4');
    title.textContent = `${event.target.title.value}`;
    
    const genre = document.createElement('h4');
    genre.textContent = `${event.target.genre.value}`

    const type = document.createElement('h4');
    type.textContent = `${event.target.type.value}`

    // const field4 = document.createElement('h4');
    // field4.textContent = `${event.target.field4.value}`

    // const deleteListItem = document.createElement('button');
    // deleteListItem.textContent = 'Delete';
    // deleteListItem.addEventListener('click', handleDeleteItem);

    newListItem.appendChild(title);
    newListItem.appendChild(genre);
    newListItem.appendChild(type);
    // newListItem.appendChild(field4);
    // newListItem.appendChild(deleteListItem);

    previousItems.appendChild(newListItem);

    this.reset();
};

const handleDeleteAll = function(event) {
    event.preventDefault();
    const previous = document.querySelector('ul');
    previous.innerHTML = ''; 
};

const handleDeleteItem = function(event) {
    event.preventDefault();
    event.target.parentNode.innerHTML = '';
}