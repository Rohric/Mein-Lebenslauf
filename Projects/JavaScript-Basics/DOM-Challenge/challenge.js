//nim eingabe vom inputfeld
//wenn man auf senden drückt
//wird kommentar in der div angezeigt


function returnComment(){

    let comment = document.getElementById("comment").value;
    document.getElementById('comment_area').innerText += comment;

}

let counterField = document.getElementById('counter_field').innerText.value;
console.log(counterField.length);

