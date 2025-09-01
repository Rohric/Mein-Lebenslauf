let myData = ["Banana", "not Banana",]; // Array mit Startwerten, falls noch keine Daten im LocalStorage gespeichert sind.

function init() {
  getFromLocalStorage(); // Beim Laden der Seite: Daten aus dem LocalStorage holen (falls vorhanden).
  render();              // Danach die aktuellen Daten im HTML anzeigen.
}



function saveData() {
  let inputRef = document.getElementById("data_input"); // Referenz auf das Eingabefeld holen.

  if (inputRef.value != "") {        // Wenn das Eingabefeld nicht leer ist ...
    myData.push(inputRef.value);     // ... füge den neuen Text dem Array myData hinzu.
  }

  saveToLocalStorage(); // Speichert das Array myData im LocalStorage.

  render();             // Aktualisiert die Anzeige mit allen Elementen im Array.
  inputRef.value = "";  // Leert das Eingabefeld wieder, damit es bereit ist für die nächste Eingabe.
}




function saveToLocalStorage() {
  localStorage.setItem("myData", JSON.stringify(myData)); 
  // Das Array myData wird in einen JSON-String umgewandelt
  // und unter dem Schlüssel "myData" im LocalStorage abgelegt.
}

function getFromLocalStorage() {
  let myArr = JSON.parse(localStorage.getItem("myData")); 
  // Holt die Daten aus dem LocalStorage (als String) und wandelt sie zurück in ein Array.

  if (myArr) {      // Wenn im LocalStorage wirklich Daten existieren (nicht null) ...
    myData = myArr; // ... dann überschreibe das aktuelle myData mit diesen gespeicherten Daten.
  }
}




function render() {
  let contentRef = document.getElementById("content"); // Referenz auf das Ausgabefeld (div#content).
  contentRef.innerHTML = "";                           // Vorher alles löschen, damit nicht doppelt angezeigt wird.

  for (let index = 0; index < myData.length; index++) { // Schleife über alle Elemente im Array myData.
    contentRef.innerHTML += `<p>${myData[index]}</p>`;  // Jedes Element wird als Absatz <p> ins HTML geschrieben.
  }
}
