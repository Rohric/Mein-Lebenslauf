//DOM und .innerHTML

console.log(document.title);

let newText = document.getElementById("oldText");

// Inhalt auslesen
console.log(newText.innerHTML);

// Inhalt ändern
newText.innerHTML =
  "Da der Text jetzt durch JavaScript angepasst wurde, ergibt er vollkommen Sinn!";

// Aufgabe: Button hinzufügen

document.getElementById("taskDiv").innerHTML =
  '<button id="taskButton" "></button>';
document.getElementById("taskButton").innerText = "Klick mich";

// Klasse bzw. class hinzufügen.
document.getElementById("taskButton").classList.add("btn");

//⚙️ 05 – setAttribute und value
let beispiel1 = document.getElementById("Beispiel1");
beispiel1.setAttribute("type", "number");
beispiel1.setAttribute("placeholder", "Zahl auswählen");

let beispiel2 = document.getElementById("Beispiel2");
console.log(beispiel2.value);
beispiel2.value = "Emil Marsal";

let beispiel3 = document.getElementById("Beispiel3");

beispiel3.setAttribute("value", "Neu"); // ändert das HTML-Attribut
console.log(beispiel3.value); // gibt trotzdem den aktuellen Wert aus ("Start" oder was der User tippt)

beispiel3.value = "Live-Wert"; // ändert, was gerade sichtbar ist

// Aufgabe set.attribute
document.getElementById("task2").innerHTML = '<p id="pTask2">W3Schools.com</p>';
document.getElementById("task2").setAttribute("title", "DASistTITEL");
document.getElementById("task2").setAttribute("class", "chip");

function toggleDNone(id) {
  document.getElementById(id).classList.toggle('d_none');
}

function logger(){
    console.log('Hey das ist ein Logger')
}
