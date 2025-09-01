//
//

let notesTitles = ["Fruit", "Aufgabe"];
let notes = ["banana", "rasen mähen"];
let trashNotesTitles = [];
let trashNotes = [];

// Notizen anzeigen lassen / rendern
function renderNotes() {
  getFromLocalStorage(); // Beim Laden der Seite: Daten aus dem LocalStorage holen (falls vorhanden).
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += "" + getNoteTemplate(indexNote);
  }
}
// Trash anzeigen lassen / rendern
function renderTrashNotes() {
  getFromLocalStorage(); // Beim Laden der Seite: Daten aus dem LocalStorage holen (falls vorhanden).
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
  let noteTitleInputRef = document.getElementById("title_input"); // eigabe auslesen
  let noteInput = noteInputRef.value;

  if (noteTitleInputRef.value != "") {
    // Wenn das Eingabefeld nicht leer ist ...
    notesTitles.push(noteTitleInputRef.value); // ... füge den neuen Text dem Array myData hinzu.
  }
  if (noteInputRef.value != "") {
    // Wenn das Eingabefeld nicht leer ist ...
    notes.push(noteInputRef.value); // ... füge den neuen Text dem Array myData hinzu.
  }
 

  saveToLocalStorage(); // Speichert das Array myData im LocalStorage.

  renderNotes(); // eingabe anzeigen lasse
  noteInputRef.value = " ";
  noteTitleInputRef.value = " ";
}

//Papierkorb
//Wann muss die notiz gelöscht werden
function moveToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1); //welche notiz muss gelöscht werden
  trashNotes.push(trashNote);
  let trashNoteTitle = notesTitles.splice(indexNote, 1); //welche title muss gelöscht werden
  trashNoteTitle.push(trashNotesTitles);
  renderNotes(); // anzeige updaten
  renderTrashNotes(trashNotes); // TrashNotes anzeige lassen
}

//notiz entgültig löschen
function deleteNote() {
  trashNotes.splice(trashNotes, 1); // notiz raus splicen also löschen
  renderNotes(); // anzeige updaten
  renderTrashNotes(trashNotes); // TrashNotes anzeige lassen
}

// LocalStorage
function saveToLocalStorage() {
  localStorage.setItem("Notizen", JSON.stringify(notes));
  localStorage.setItem("tNotizen", JSON.stringify(notesTitles));
  // Das Array myData wird in einen JSON-String umgewandelt
  // und unter dem Schlüssel "Notizen" im LocalStorage abgelegt.
}

function getFromLocalStorage() {
  let myArr1 = JSON.parse(localStorage.getItem("Notizen"));
  let myArr2 = JSON.parse(localStorage.getItem("tNotizen"));
  // Holt die Daten aus dem LocalStorage (als String) und wandelt sie zurück in ein Array.

  if (myArr1,myArr2) {
    // Wenn im LocalStorage wirklich Daten existieren (nicht null) ...
    notes = myArr1; // ... dann überschreibe das aktuelle myData mit diesen gespeicherten Daten.
    notesTitles = myArr2; // ... dann überschreibe das aktuelle myData mit diesen gespeicherten Daten.
  }
}
