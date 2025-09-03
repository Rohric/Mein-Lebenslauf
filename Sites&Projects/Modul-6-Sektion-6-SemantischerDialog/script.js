const dialogRef = document.getElementById('dialog1');

function openDialog() {
  dialogRef.showModal();
  dialogRef.classList.add('opened')
}

function closeDialog(){
    dialogRef.close()
    dialogRef.classList.remove('opened')
}
