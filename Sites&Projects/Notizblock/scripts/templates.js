// wo werden sie angezeigt?
function getNoteTemplate(indexNotizen) {
  return `<div class="note"><p>+ ${notizen[indexNotizen]}
    <button class="btn" onclick="moveToArchiv(${indexNotizen})" id="moveToArchiv">X</button></p></div>`;
}

function getArchivNoteTemplate(indexArchivNotizen) {
  return `<div class="note"><p>+ ${archivNotizen[indexArchivNotizen]}
    <button class="btn" onclick="moveToTrash(${indexArchivNotizen})" id="deleteNote">X</button></p></div>
`;
}

function getTrashNoteTemplate(indexMüllNotizen) {
  return `<div class="note"><p>+ ${müllNotizen[indexMüllNotizen]}
    <button class="btn" onclick="deleteNote(${indexMüllNotizen})" id="moveToTrash">X</button></p></div>`;
}