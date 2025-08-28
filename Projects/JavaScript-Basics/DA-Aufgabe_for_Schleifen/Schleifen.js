//
// AUfgabe 1

function sumArray(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}

function checkSumArray1(){
    let Zahl_1 = parseFloat(document.getElementById("Zahl_1").value);
    let Zahl_2 = parseFloat(document.getElementById("Zahl_2").value);
    let Zahl_3 = parseFloat(document.getElementById("Zahl_3").value);
    let numbers = [Zahl_1,Zahl_2,Zahl_3];
    let result = sumArray(numbers);
    document.getElementById("result1").textContent = result;
}