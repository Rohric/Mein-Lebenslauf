//Aufgabe 1

function returnComment(){

    let comment = document.getElementById("comment").value;
    document.getElementById('comment_area').innerHTML += "<p>"+ comment +"</p>";
}

// Aughabe 2

let counterField = document.getElementById('counter_field').innerText.value;
console.log(counterField.length);

