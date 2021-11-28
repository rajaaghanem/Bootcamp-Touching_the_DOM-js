function nextArea(current,idNum){
if (document.querySelector(`#${current}`).value.length == 1){
    document.querySelector(`#${idNum}`).focus();
}
}
