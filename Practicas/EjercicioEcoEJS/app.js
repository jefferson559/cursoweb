//config files
const express=require('express');

const products=require('./Utils/products');

const app=express();

const path=require('path');//me da el path relativo a donde estoy 

//seteo una regla de configuraciones 
app.set('views',path.join(__dirname,'views'))//defino el path de las vistas
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))//todos los archivos publicos vana  estar en un solo lugar

app.listen(3000,()=>{
    console.log("Server corriendo en el puerto 3000");
})

app.get('',(req,res)=>{
    res.render('index',{title:'E-commerce',products})   
});

app.get('/contacto',
(req,res)=>
{
    res.render('pages/contacto',{title:'E-commerce| Contacto'})
});