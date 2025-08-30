function returnResult(){
    // wenn Note zwischen 1-4
    // dann bestanden
    // ansonsten wenn Note 5 oder 6
    // dann nicht bestanden
    // ansonsten falsche Eingabe
    let grade = document.getElementById("grade").value;

    if(grade <= 4 && grade > 0){ // wenn Note zwischen 1-4
        console.log("Bestanden!");  // dann bestanden
        document.getElementById("result").innerHTML +=  "<p>Bestanden!</p>";
    }
    else if(grade == 5 || grade == 6){ // ansonsten wenn Note 5 oder 6
        console.log("nicht bestanden!"); // dann nicht bestanden
        document.getElementById("result").innerHTML += "<p>nicht bestanden!</p>";

    }
    else{ // ansonsten 
        console.log("Falsche Eingabe"); // falsche Eingabe
        document.getElementById("result").innerHTML += "<p>Falsche Eingabe!</p>";
    }
}