//
//
 
let notesTitles = ['Fruit', 'Aufgabe']              // Array mit den Titeln der Notizen
let notes = ["banana", "rasen mähen"];              // Array mit den eigentlichen Notiz-Texten
let trashNotesTitle = [];                           // Array für Titel, die in den Papierkorb verschoben wurden
let trashNotes = [];                                // Array für Notizen (Texte), die in den Papierkorb verschoben wurden

// Notizen anzeigen lassen / rendern
function renderNotes() {
  let contentRef = document.getElementById("content"); // Referenz auf das <div> mit id="content"
  contentRef.innerHTML = "";                           // Inhalt löschen, damit nicht doppelt angezeigt wird

  for (let indexNote = 0; indexNote < notes.length; indexNote++) { // Schleife über alle Notizen
    contentRef.innerHTML += "" + getNoteTemplate(indexNote);       // HTML-Template für jede Notiz anhängen
  }
}

// Trash anzeigen lassen / rendern
function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content"); // Referenz auf <div> mit id="trash_content"
  trashContentRef.innerHTML = "";                                 // Inhalt leeren

  for (                                                   // Schleife über alle Papierkorb-Notizen
    let indexTrashNote = 0;                               // Start bei 0
    indexTrashNote < trashNotes.length;                   // Bedingung: solange Elemente im Papierkorb existieren
    indexTrashNote++                                      // Zähler hochzählen
  ) {
    trashContentRef.innerHTML += "" + getTrashNoteTemplate(indexTrashNote); // Template für jede Trash-Notiz anhängen
  }
}

// neue Notiz generieren Template erstellen
function getNoteTemplate(indexNote) {
  return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]}<button onclick="moveToTrash(${indexNote})">x</button></p>`; 
  // Gibt HTML zurück: Titel + Notiztext + Button
  // Klick auf den Button ruft moveToTrash() mit Index auf
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<p>+ title: ${trashNotesTitle[indexTrashNote]} ->  ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">x</button></p>`; 
  // Gibt HTML zurück: Titel + Notiztext aus Papierkorb + Button
  // Klick auf den Button ruft deleteNote() mit Index auf
}

// notizen hinzufügen
function addNote() {
  let noteInputRef = document.getElementById("note_input"); // Referenz auf das Input-Feld holen
  let noteInput = noteInputRef.value;                       // Wert (Text) aus dem Feld holen

  notes.push(noteInput);                                    // Eingabe ins notes-Array speichern

  renderNotes();                                            // Notizen neu anzeigen
  noteInputRef.value = " ";                                 // Eingabefeld leeren
}

// Papierkorb
// Wann muss die Notiz gelöscht werden
function moveToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);               // Notiz mit splice aus notes entfernen, Ergebnis = gelöschtes Element
  trashNotes.push(trashNote);                               // Element ins Papierkorb-Array schieben

  let trashNotesTitles = notesTitles.splice(indexNote, 1);  // Auch den passenden Titel aus notesTitles entfernen
  trashNotesTitle.push(trashNotesTitles);                   // Titel ins Papierkorb-Array schieben

  renderNotes();                                            // Notizen neu anzeigen
  renderTrashNotes(trashNotes);                             // Papierkorb neu anzeigen
}

// notiz entgültig löschen
function deleteNote() {
  trashNotes.splice(trashNotes, 1);                         // Löscht Notizen aus dem Papierkorb (aber fehlerhaft: hier wird das ganze Array übergeben!)
  renderNotes();                                            // Notizen neu anzeigen
  renderTrashNotes(trashNotes);                             // Papierkorb neu anzeigen
}
