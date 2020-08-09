document.querySelector("#add-time").addEventListener('click', cloneField);

function cloneField () {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    
    newFieldContainer.querySelector('button.delete-block').classList.remove('inactive');
    newFieldContainer.querySelector('button.delete-block').classList.add('active');
    newFieldContainer.querySelector('button.delete-block').addEventListener('click', removeField);

    const fields = newFieldContainer.querySelectorAll('input');
    fields.forEach(function(field) {
        field.value = '';
    });
    
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}