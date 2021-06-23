 function cambiarMinaMayusculas(){
    var t = document.querySelectorAll("h5.card-title") 
    for (let i = 0; i < t.length; i++) {
        console.log(t[i].innerText);
        }
    
    // var listTitle = Array.prototype.slice.call(t);
    //     for (let i = 0; i < listTitle.length; i++) {
    //         console.log(listTitle[i]);
    //         }
}
cambiarMinaMayusculas();
