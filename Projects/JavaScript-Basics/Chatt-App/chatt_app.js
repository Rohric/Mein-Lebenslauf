//
//
// let chatt = [" "];
// let name = document.getElementById("senderName").value;
// let messange = document.getElementById("messangeInput").value;

// function sendMessange(name,messange) {
//   let result = document.getElementById("messangeOutput").innerHTML=+ name + messange;
//   document.getElementById("messangeOutput").textContent = result;



// version mit Hilfe
function sendMessange() { 
    let name = document.getElementById("senderName").value.trim();
    let message = document.getElementById("messageInput").value.trim();
    let result = name + ": " + message;
    let errorbox = document.getElementById("error")
    if (name.length < 3 || message.length < 5) {
        errorbox.textContent = "Bitte Name mind. 3 Buchstaben und Nachricht mind. 5 Buchstaben!";
        return;
      }


    document.getElementById("messangeOutput").innerHTML += "<p>" + result + "</p>";
}