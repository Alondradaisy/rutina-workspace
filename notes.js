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

function clear() {

clearButton.noteList = document.querySelector('ol');
clearButton.innerHTML = '';
}

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function(){
    console.log('clear');

    noteList.splice(0, noteList.length);
});