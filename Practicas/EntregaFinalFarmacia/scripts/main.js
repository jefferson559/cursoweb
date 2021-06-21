 function cambiarMinaMayusculas(){
    var t = document.querySelectorAll("h5.card-title")
    var listTitle = Array.prototype.slice.call(t);
        for (let i = 0; i < listTitle.length; i++) {
            console.log(listTitle[i]);
            }
}
cambiarMinaMayusculas();
