//
// Definition der Variabeln, hier nutzen wir Array, da wir eine Liste haben möchten

let notizenTitel = ["Fruit", "Aufgabe"];
let notizen = ["banana", "rasen mähen"];
let müllNotizen = [];
let müllNotizenTitel = [];

// Wann werden sie angezeigt?
function init() {
  getFromLocalStorage();
  showNote();
}

function showNote() {
  let contentRef = document.getElementById("content1");
  contentRef.innerHTML = "";

  for (let indexNotizen = 0; indexNotizen < notizen.length; indexNotizen++) {
    contentRef.innerHTML += getNoteTemplate(indexNotizen);
  }
}

function showTrash() {
  let müll = document.getElementById("content2");
  müll.innerHTML = "";

  for (
    let indexMüllNotizen = 0;
    indexMüllNotizen < müllNotizen.length;
    indexMüllNotizen++
  ) {
    müll.innerHTML += gettrashNoteTemplate(indexMüllNotizen);
  }
}

// wo werden sie angezeigt?
function getNoteTemplate(indexNotizen) {
  return `<p>+ ${notizen[indexNotizen]}<button onclick="moveToTrash(${indexNotizen})" id="moveToTrash">X</button></p>`;
}

function gettrashNoteTemplate(indexMüllNotizen) {
  return `<p>+ ${müllNotizen[indexMüllNotizen]}<button onclick="deleteNote(${indexMüllNotizen})" id="moveToTrash">X</button></p>`;
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

// Notiz in Papierkorb bewegen
function moveToTrash(indexNotizen) {
  let trashNote = notizen.splice(indexNotizen, 1);
  müllNotizen.push(trashNote);
  showNote();
  showTrash();
}

function deleteNote() {
  müllNotizen.splice(müllNotizen, 1); // 1. Aus Array löschen
  localStorage.removeItem("notizen");// 2. aus Lokal Storrage löschen
 
  saveToLocalStorage(); // 3. Array wieder in LocalStorage speichern
  showNote();
  showTrash();
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
}

// function removeFromLocalStorage(){
//   localStorage.setItem("notizen", JSON.stringify(notizen));
//   localStorage.removeItem("notizen");
// }

function getFromLocalStorage() {
  let myArr = JSON.parse(localStorage.getItem("notizen"));
  if (myArr) {
    notizen = myArr;
  }
}
