console.log("Funcionen Beispiel preis Rechnung")

let discount = 50;
let price = 500;

console.log((price - discount) * 1.19);

price = 400;

function calculatePrice() {
    console.log((price - discount) * 1.19);
}

calculatePrice();

price = 620;
calculatePrice();
price = 450
calculatePrice();

console.log("Funcionen Beispiel direkte übergebung")

function CalculatedPrice(price, discount) {
    console.log((price - discount) * 1.19);
}

CalculatedPrice(300, 100)


console.log("Funcionen Output und Return")


console.log(CalculatedPrice1(300, 100))

function CalculatedPrice1(price, discount) {
    let priceReturn = (price - discount) * 1.19;
    console.log("vor Return")
    return priceReturn;
}