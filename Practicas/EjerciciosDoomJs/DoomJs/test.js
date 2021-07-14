let variable=document.querySelector("h1")
console.log(variable)
console.dir(variable)
variable.style.color='red'

const allH2=document.querySelectorAll("h2")
console.log(allH2)

// for(let i=0;i<allH2.length;i++){
//         allH2[i].style.color='green'
// }
// allH2.forEach(function(e){
//     e.style.color='green'
// })
//agregar clases de js 
// const p=document.querySelector(".mainP")
// p.classList.add("highlight")

// let link=document.querySelector("a")

// console.log(link.getAttribute("href"));

// link.setAttribute("href","htt://www.yahoo.com.ar")


// const a = document.querySelectorAll("a");
// a.forEach(function(el){
//     el.setAttribute("href", "http://yahoo.com");
// });
const $body=document.querySelector('body') //convencion $ para elementos html
const $button=document.querySelector('.dark-light');
$button.addEventListener('click',function(){
    $body.classList.toggle('dark-bg')
})