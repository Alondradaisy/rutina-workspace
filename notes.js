const input = document.querySelector('input');
const button = document.querySelector('button');
const noteList = document.querySelector('.note-list');


button.addEventListener('click', function () {
    const userInput = input.value;
    const note = document.createElement('li');
    note.className = 'note';
    note.innerText = userInput;
    
    noteList.appendChild(note);
})

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function(event) {
    event.target.style = 'none';
    noteList.innerText = ''; 
    console.log('its working')
})