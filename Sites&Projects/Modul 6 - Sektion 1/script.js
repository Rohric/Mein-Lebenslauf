//Aufgabe 1
function fullName(name, last) {
  return name + " " + last;
}

console.log(fullName("Emil", "Marsal"));
console.log(fullName("Marvin", "Scheuer"));

// Aufgabe 2
function capitalizeLetters(value) {
  return value.toUpperCase();
}
console.log(capitalizeLetters("bAnanE")); // Ausgabe: BANANE

// Aufgabe 3
function countCharacters(value) {
  return value.length;
}

console.log(countCharacters("banana")); // Ausgabe: 6

// Knacker-Aufgabe
function formatToCurrency(value) {
  return value.toFixed(2).replace(".", ",");
}

console.log(formatToCurrency(0.5)); // Ausgabe: "0,50€"