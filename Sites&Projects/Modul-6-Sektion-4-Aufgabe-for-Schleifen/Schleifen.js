//
// AUfgabe 1

function sumArray(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return sum;
}

function checkSumArray1() {
  let Zahl_1 = parseFloat(document.getElementById("Zahl_1").value);
  let Zahl_2 = parseFloat(document.getElementById("Zahl_2").value);
  let Zahl_3 = parseFloat(document.getElementById("Zahl_3").value);
  let numbers = [Zahl_1, Zahl_2, Zahl_3];
  let result = sumArray(numbers);
  document.getElementById("result1").textContent = result;
}

//
// Aufgabe 2

// function printNumbers(n){
//   for(i = 0; i<n; i++){
//     console.log(i);
//   }
// }
// printNumbers(8)

function printNumbers(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result.join(", ");
}

function checkPrintNumbers() {
  let input = parseInt(document.getElementById("taskInput2").value);
  let numbers = printNumbers(input);
  document.getElementById("result2").innerHTML = numbers;
}

//
// Aufgabe 3
function printNumbersReverse(n) {
  let result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result.join(", ");
}
console.log(printNumbersReverse(5));

//
// Aufgabe 4

function printEveryThirdElement(array) {
  let result = [];
  for (let i = 0; i < array.length; i += 3) {
    result.push(array[i]);
  }
  return result.join(", ");
}
console.log(printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(printEveryThirdElement(["a", "b", "c", "d", "e", "f"]));

//
// Aufgabe 5
// KI GENERIERT, BIN NICHT AUF DIE LÖSUNG GEKOMMEN.
function isPrime(n) {
    if (n <= 1) return false;  // 0, 1 und negative Zahlen sind keine Primzahlen
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false; // teilbar durch i → keine Primzahl
      }
    }
    return true; // durch nichts teilbar → Primzahl
  }
  console.log(isPrime(7));
  console.log(isPrime(6));