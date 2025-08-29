// Daten
let notesTitles = ["essen", "Ort", "Aufgabe"];
let notes = ["banana", "rasen", "nähen"];

let trashNotesTitles = []; // <-- initialisieren!
let trashNotes = [];

// Render // wann werden sie angezeigt?
function renderNotes() {
  const contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let i = 0; i < notes.length; i++) {
    contentRef.innerHTML += getNoteTemplate(i);
  }
}

function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

// Templates
function getNoteTemplate(indexNote) {
  return `<p>title: ${notesTitles[indexNote]} -> ${notes[indexNote]} 
            <button onclick="moveToTrash(${indexNote})">X</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<p>title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]}
            <button onclick="deleteTrashNote(${indexTrashNote})">X</button></p>`;
}

// Notiz Hinzufügen
function addNote() {
  let noteInputRef = (contentRef = document.getElementById("note_input"));
  let noteInput = noteInputRef.value;

  notes.push(noteInput);

  renderNotes();
  noteInputRef.value = "";
}

// In den Papierkorb verschieben
function moveToTrash(index) {
  let trashNote = notes.splice(index, 1);
  trashNotes.push(trashNote[0]);
  let trashNoteTitle = notesTitles.splice(index, 1);
  trashNotesTitles.push(trashNoteTitle[0]);

  renderNotes();
  renderTrashNotes();
}

// Im Papierkorb endgültig löschen
function deleteTrashNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1); // Text löschen
//   trashNotesTitles.splice(indexTrashNote, 1); // zugehörigen Titel löschen
  renderNotes();
  renderTrashNotes();
}




