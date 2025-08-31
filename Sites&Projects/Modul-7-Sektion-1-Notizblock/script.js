//
//

let notesTitles = ['Fruit', 'Aufgabe']
let notes = ["banana", "rasen mähen"];
let trashNotesTitle = [];
let trashNotes = [];

// Notizen anzeigen lassen / rendern
function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += "" + getNoteTemplate(indexNote);
  }
}
// Trash anzeigen lassen / rendern
function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += "" + getTrashNoteTemplate(indexTrashNote);
  }
}

// neue Notiz generieren Template erstellen
function getNoteTemplate(indexNote) {
  return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]}<button onclick="moveToTrash(${indexNote})">x</button></p>`;
}
function getTrashNoteTemplate(indexTrashNote) {
  return `<p>+ title: ${trashNotesTitle[indexTrashNote]} ->  ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">x</button></p>`;
}

// notizen hinzufügen
function addNote() {
  let noteInputRef = document.getElementById("note_input"); // eigabe auslesen
  let noteInput = noteInputRef.value;

  notes.push(noteInput); // eingabe speichern ,den notizen hinzufügen, heißt wir müssen es dem note Array hinzufügen

  renderNotes(); // eingabe anzeigen lasse
  noteInputRef.value = " ";
}

//Papierkorb
//Wann muss die notiz gelöscht werden
function moveToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1); //welche notiz muss gelöscht werden
  trashNotes.push(trashNote);
  let trashNotesTitles = notesTitles.splice(indexNote, 1); //welche title muss gelöscht werden
  trashNotesTitle.push(trashNotesTitles);
  renderNotes(); // anzeige updaten
  renderTrashNotes(trashNotes); // TrashNotes anzeige lassen
}

//notiz entgültig löschen
function deleteNote() {
  trashNotes.splice(trashNotes, 1); // notiz raus splicen also löschen
  renderNotes(); // anzeige updaten
  renderTrashNotes(trashNotes); // TrashNotes anzeige lassen
}
