'use strict';

function Note(title, text) {
    this.title = title;
    this.text = text;
}

function saveNoteToState (savedNote) {
    // does savedNote.title already exist in state.notes?
    let foundNoteIndex = state.notes.findIndex(note => note.title === savedNote.title);
    // if it does, replace/update the information.
    if (foundNoteIndex === -1) {
        state.notes.push(savedNote);
    // if it does not, add a new note
    } else {
        state.notes.splice(foundNoteIndex, 1, savedNote);
    }
    // updates local storage with new information; called from app.js
    saveAllToLocalStorage();
    
}

function loadNoteFromState () {

}


// renders note onto screen 
function renderNote (event) {
    let textAreaEl = document.getElementById('noteText');
    let titleEl = document.getElementById('noteTitle');

    console.log(state.notes[event.target.id].text);
    titleEl.value = state.notes[event.target.id].title;
    textAreaEl.innerText = state.notes[event.target.id].text;
}

function renderNotesButtons () {
    let scrollEl = document.getElementById('notesButtonScroll')

    state.notes.forEach(note => {
        // create buttons for each note in the state.notes array
        let containerEl = document.createElement('div');
        let buttonEl = document.createElement('button');
        buttonEl.innerText = note.title;
        buttonEl.setAttribute('id', state.notes.indexOf(note));
        let removeEl = document.createElement('button');
        removeEl.innerText = '-';
        removeEl.setAttribute('id', 'removeNote');
        // add event listeners to each button
        buttonEl.addEventListener('click', renderNote);
        removeEl.addEventListener('click', handleRemoveNote);

        containerEl.appendChild(removeEl);
        containerEl.appendChild(buttonEl);

        scrollEl.appendChild(containerEl);
    });
}

function handleSaveNote (event) {
    event.preventDefault();
    let savedNote = new Note(event.target.noteTitle.value, event.target.noteText.value);
    saveNoteToState(savedNote);
}

function handleRemoveNote (event) {
    event.preventDefault();
}


// 'starts' below
document.getElementById('noteDisplay').addEventListener('submit', handleSaveNote);
renderNotesButtons();