let notesTitels = ["essen", "Ort", "Aufgabe"];
let notes = ["banana", "rasen", "nähen"]; // ->Notizen anzeigen lassen

let trashNotesTitles
let trashNotes = [];
function renderNotes() {
  // -> wann werden sie angezeigt?
  let contentRef = document.getElementById("content"); // -> ich muss definieren, wo sie anzuzeigen sind.
  contentRef.innerHTML = ""; // zeigt: banana,rasen,nähen

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
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

function getNoteTemplate(indexNote) {
  return `<p>+ title: ${notesTitels[indexNote]} -> ${notes[indexNote]}
  <button onclick="moveToTrash(${indexNote})" > X </button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]}<button onclick="deleteTrashNote(${indexTrashNote})" > X </button></p>`;
}

function addNote() {
  //notizen hinzufügen
  let noteInputRef = (contentRef = document.getElementById("note_input")); //eingabe von user defienieren
  let noteInput = noteInputRef.value; //eingabe auslesen

  notes.push(noteInput); //eingabe in den notizen speichern

  renderNotes(); //eingabe anzeigen lassen, haben wir ja oben schon definiert

  noteInputRef.value = ""; // eingabe feld löschen, darum die trennung von referenzen udn input!
}

function moveToTrash(indexNote) {
  //notizen löschen
  //wann muss die notiz gelöscht werden, bei aufruf
  let trashNote = notes.splice(indexNote, 1); //welche notiz soll gelöscht werden, wird hier zwischengespeichert
  trashNotes.push(trashNote[0]);
  let trashNoteTitle = notesTitels.splice(indexNote, 1);
  trashNotesTitles.push(trashNoteTitle[0]);
  renderNotes();
  renderTrashNotes(); // anzeige updaten
}
function deleteTrashNote(indexTrashNote) {
  // Notiz endgültig löschen
  trashNotes.splice(indexTrashNote, 1); // endgültig löschen
  renderNotes();
  renderTrashNotes(); // Anzeige aktualisieren
}

//notizen speichern
