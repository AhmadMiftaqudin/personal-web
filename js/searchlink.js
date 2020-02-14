function search_link() {
    let input=document.getDocumentById('searchbar').value
    input=input.toLowerCase();
    let x=document.getElementsByClassName('linkname');

    for(i=0;i<x.length;i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item"
        }
    }
}