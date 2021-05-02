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

function clear(noteList){
    const clearList = document.getElementsByClassName('.note-list');
    clearList.parentNode.removeChild(clearList);
}
