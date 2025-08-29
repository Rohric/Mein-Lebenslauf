
console.log("Start true")

let myCondition1 = true;
console.log(myCondition1)

myCondition1 = !myCondition1
console.log(myCondition1)

myCondition1 = false;
console.log(myCondition1)

myCondition1 = !true;
console.log(myCondition1)

myCondition1 = !myCondition1
console.log(myCondition1)

console.log("Start false")

let myCondition2 = false;
console.log(myCondition2)

myCondition2 = !myCondition2
console.log(myCondition2)

myCondition2 = false;
console.log(myCondition2)

myCondition2 = !true;
console.log(myCondition2)

myCondition2 = !myCondition2
console.log(myCondition2)

console.log("Test der Operatoren NOT OR AND")

let myCondition3 = !true;        //Not Operator
console.log(myCondition3)

myCondition3 = true || false;    // OR operator
console.log(myCondition3)

myCondition3 = false && false;    // AND Operator
console.log(myCondition3)

console.log("Test der Operatoren == ===")

let myCondition4 = true

myCondition4 = 45 == "45";            // == testet ob exakt gleich, ohne Type 
console.log(myCondition4)

myCondition4 = 45 == "50";
console.log(myCondition4)

myCondition4 = 45 === 45;             // === testet ob exakt gleich, mit Type ->True 
console.log(myCondition4)
myCondition4 = 45 === "45";            // === testet ob exakt gleich, mit Type ->false 
console.log(myCondition4)
console.log("Test der Operatoren < > ")
myCondition4 = 45 > 123;                // > Größer abfrage
console.log(myCondition4)
myCondition4 = 45 < 123;                // > Größer abfrage
console.log(myCondition4)

console.log("Test der Operatoren >= <= ")
myCondition4 = 45 >= 123;               // > Größergleich abfrage
console.log(myCondition4)
myCondition4 = 123 >= 45;               // > Größergleich abfrage
console.log(myCondition4)

myCondition4 = 45 <= 123;               // > Größergleich abfrage
console.log(myCondition4)
myCondition4 = 123 <= 45;               // > Größergleich abfrage
console.log(myCondition4)

console.log("Ende Lektion Condtion")

console.log("Start Lektion IF ELSE")

let myIFcondition = false

if(myIFcondition){
    console.log("hello World! if Teil");
} else{
    console.log("hello World! else Teil")
}