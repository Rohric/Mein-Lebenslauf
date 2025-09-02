//
// Definition der Variabeln, hier nutzen wir Array, da wir eine Liste haben möchten

let notizenTitel = ["Fruit", "Aufgabe"];
let notizen = ["banana", "rasen mähen"];

let archivNotizen = [];
let archivNotizTitel = [];

let müllNotizen = [];
let müllNotizenTitel = [];

// Wann werden sie angezeigt?
function init() {
  getFromLocalStorage();
  showNote();
  showTrash();
  showArchiv()
}

function showNote() {
  let contentRef = document.getElementById("content1");
  contentRef.innerHTML = "";

  for (let indexNotizen = 0; indexNotizen < notizen.length; indexNotizen++) {
    contentRef.innerHTML += getNoteTemplate(indexNotizen);
  }
}

function showArchiv() {
  let archivContentRef = document.getElementById("content3");
  archivContentRef.innerHTML = "";

  for (
    let indexArchivNotizen = 0;
    indexArchivNotizen < archivNotizen.length;
    indexArchivNotizen++
  ) {
    archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNotizen);
  }
}

function showTrash() {
  let müllContentRef = document.getElementById("content2");
  müllContentRef.innerHTML = "";

  for (
    let indexMüllNotizen = 0;
    indexMüllNotizen < müllNotizen.length;
    indexMüllNotizen++
  ) {
    müllContentRef.innerHTML += getTrashNoteTemplate(indexMüllNotizen);
  }
}



//Notiz hinzufügen
function addNote() {
  let noteInputRef = document.getElementById("notiz"); // referenz der eingabe / eingabefeld
  let noteInput = noteInputRef.value; // die eingabe
  notizen.push(noteInput);
  saveToLocalStorage();
  showNote();
  noteInputRef.value = ""; // Eingabefeld leeren
}
//Notiz ins archiv bewegen
function moveToArchiv(indexArchivNotizen) {
  let archivNote = notizen.splice(indexArchivNotizen, 1)[0];
  archivNotizen.push(archivNote);
  saveToLocalStorage()
  showNote();
  showArchiv()
  showTrash();
}

// Notiz in Papierkorb bewegen
function moveToTrash(indexMüllNotizen) {
  let trashNote = archivNotizen.splice(indexMüllNotizen, 1);
  müllNotizen.push(trashNote);
  saveToLocalStorage()
  showNote();
  showArchiv()
  showTrash();
}



// Notiz endgültig löschen
function deleteNote(index) {
  müllNotizen.splice(index, 1); // 1. Aus Array löschen
  localStorage.removeItem("notizen"); // 2. aus Lokal Storrage löschen

  saveToLocalStorage(); // 3. Array wieder in LocalStorage speichern
  showNote();
  showTrash();
  showArchiv()
}

// Local Storage

function saveData() {
  let inputRef = document.getElementById("content1");

  if (inputRef.value != "") {
    myData.push(inputRef.value);
  }

  saveToLocalStorage();

  render();
  inputRef.value = "";
}

function saveToLocalStorage() {
  localStorage.setItem("notizen", JSON.stringify(notizen));
  localStorage.setItem("archiv", JSON.stringify(archivNotizen));
  localStorage.setItem("müll", JSON.stringify(müllNotizen));
}



function getFromLocalStorage() {
  let n = JSON.parse(localStorage.getItem("notizen"));
  let a = JSON.parse(localStorage.getItem("archiv"));
  let m = JSON.parse(localStorage.getItem("müll"));
  if (n) {
    notizen = n;
  }
  if (a) {archivNotizen = a
    
  }
  if (m) müllNotizen = m;
}



document.getElementById("notiz").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addNote(); 
  }
});
