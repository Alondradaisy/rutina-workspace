function addQuickNote(noteObject) {
    noteObject.push(noteObject);
}
let id = 10;

function removeNote (index) {
    note.splice(index, 1); //starts at [] and 1 num
}

function printNote(note) {
let noteItem = document. createElement('li'); //creates list element note through js
noteItem.innerText = note.text; //sets the notes text property using innerText
noteItem.classList.add('addNote-item'); //assign it a classList to style later
noteItem.id = note.id; //giving it an id so that it matches the html elements
if (note.complete === true) {
    noteItem.classList.add('complete');
}
const orderedList = document.querySelector('ol');
orderedList.appendChild(noteItem);
}

function printAllNotes(note) {
    for (list of note) {
        console.log(note);
        printNote(note);
    }
}

printAllNote(); // call printAllNotes to loop through all notes

function clearNotes() {
    const orderedList = document.querySelector('ol');
    orderedList.innerHTML = ''; // to clear what's inside the note list
}

const addNote = document.querySelector('.add-note');
addNote.addEventListener('click', function() {
    console.log('addNote button clicked');

    const noteInput = document.querySelector('input.note-input'); // used both class and name tag to be concise
    const noteObject = {
        text: noteInput.value, //to get the user's value
        complete: false,
        priority: 2,
        id: id
    };
    id++ //this refers to the id variable from above - here we're incrementing off that
    addQuickNote(noteObject);
    refreshPage();
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function() {
    console.log('clear');
    notes.splice(0, notes.length);

    refreshPage();
});



