const addQuickNote = function(note) {
    return note.text;
}

const addPriority = function(note) {
    return note.priority;
}

const nameAndPriority = function(note) {
    return `${note.text} - ${note.priority === 2 ? 'High' : 'Low'}`;
}

const isComplete = function(note) {
    return note.complete
}

const isNotComplete = function(note) {
    return !note.complete
}

const isHighPriority = function(note) {
    return note.priority === 2;
}

const isLowPriority = function(note) {
    return note.priority === 1;
}

//

const names = function(note) {
    return note.map(addQuickNote);
}

const priorities = function(note) {
    return note.map(addPriority);
}

const namesAndPriorities = function(note) {
    return note.map(nameAndPriority);
}

const justNotComplete = function(note) {
    return note.filter(isNotComplete);
}

const justComplete = function(note) {
    return note.filter(isComplete);
}

const priority20nly = function(note) {
    return note.filter(isHighPriority);
}
const priority10nly = function(note) {
    return note.filter(isLowPriority);
}

module.exports = {
    addQuickNote,
    addPriority,
    isComplete,
    isHighPriority,
    names,
    priorities,
    namesAndPriorities,
    justNotComplete,
    justComplete,
    priority20nly,
    priority10nly,
}