// Training 1 Hello World

let title = document.getElementById("titel");
console.log(title.innerHTML);

title.innerHTML = "Hello World!";
console.log(title.innerHTML);

// Training 2 Farbwechsler

// Deinen Button und die Box gezielt auswählen
const box = document.getElementById("color-area");
const button = document.getElementById("klick-me");

button.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Box färben
  box.style.backgroundColor = randomColor;
  button.style.backgroundColor = randomColor2;

  console.log("Farbe geändert,box:", randomColor);
  console.log("Farbe geändert,button:", randomColor2);
});

// Training 3 Klickzähler
