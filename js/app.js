document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = function(event) {
    event.preventDefault();

    const previousItems = document.querySelector('#list');
    const newListItem = document.createElement('div');

    const field1 = document.createElement('h4');
    field1.textContent = `${event.target.field1.value}`;
    
    const field2 = document.createElement('h4');
    field2.textContent = `${event.target.field2.value}`

    const field3 = document.createElement('h4');
    field3.textContent = `${event.target.field3.value}`

    const field4 = document.createElement('h4');
    field4.textContent = `${event.target.field4.value}`

    newListItem.appendChild(field1);
    newListItem.appendChild(field2);
    newListItem.appendChild(field3);
    newListItem.appendChild(field4);

    previousItems.appendChild(newListItem);

    this.reset();
};