let title = document.getElementById('website_title');
title.innerHTML = "neuer Titel";


document.getElementById('test_div').innerHTML="<button id='firstButton'></button>";

document.getElementById('firstButton').innerText='"Klick mich"';

document.getElementById('test_div').classList.add('green_bg') // .remove entfernt dem entsprechend eine klasse

// mit .toggle erkennt die DOM automatisch ob eine da ist oder nicht.
// also die DOM erstellt automatisch eine wenn nötig oder entfernt diese.

document.getElementById('test_input').setAttribute('value', 123)

// document.getElementById('test_input').setAttribute('type', 'text') // durch die type änderung kann man jetzt text anzeigen lassen. 
// document.getElementById('test_input').setAttribute('value', 'hier waren davor zahlen')

document.getElementById('mission2').innerHTML='<p><dfn id="dfn" title="- Titel hinzufügen">Aufgabe 2</dfn> ist damit abgeschlossen.</p>';

document.getElementById('dfn').style.fontStyle = "normal";
