//DOM und .innerHTML

console.log(document.title);


let newText = document.getElementById('oldText');

// Inhalt auslesen
console.log(newText.innerHTML)

// Inhalt ändern
newText.innerHTML = "Da der Text jetzt durch JavaScript angepasst wurde, ergibt er vollkommen Sinn!"

// Aufgabe: Button hinzufügen

document.getElementById('taskDiv').innerHTML = '<button id="taskButton" "></button>'
document.getElementById('taskButton').innerText = "Klick mich"

// Klasse bzw. class hinzufügen.
document.getElementById('taskButton').classList.add('btn')
