// Startdaten
let myData = ["Banana", "not Banana", "Apple"];

function init() {
  getFromLocalStorage(); // beim Laden: Daten aus Speicher holen
  render();
}

// Eingabe speichern
function saveData() {
  let inputRef = document.getElementById("data_input");

  if (inputRef.value != "") {
    myData.push(inputRef.value);
  }

  saveToLocalStorage(); // Array -> LocalStorage
  render(); // Anzeige aktualisieren
  inputRef.value = ""; // Eingabefeld leeren
}

// Daten ins LocalStorage speichern
function saveToLocalStorage() {
  localStorage.setItem("myData", JSON.stringify(myData));
}

// Daten aus LocalStorage holen
function getFromLocalStorage() {
  let myArr = JSON.parse(localStorage.getItem("myData"));

  if (myArr) {        // prüfen ob nicht null
    myData = myArr;   // nur überschreiben wenn Daten vorhanden
  }
}


// Anzeige
function render() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let index = 0; index < myData.length; index++) {
    contentRef.innerHTML += `<p>${myData[index]}</p>`;
  }
}
