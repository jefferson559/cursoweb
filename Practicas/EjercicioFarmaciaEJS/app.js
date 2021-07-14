//config files
const express=require('express');

const app=express();
app.listen(3000,()=>{
    console.log("Server corriendo en el puerto 3000");
})
//Requerimos el paquete path
const path=require('path');
//Utilizamos el paquete path y decimos dónde van a estar las views
app.set('views',path.join(__dirname,'views'))//defino el path de las vistas
app.set('view engine','ejs') //defino el engine de vista
/////////donde express debe usar los archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));
///
//.render renderisa la pagina que le enviemos en el path indicado en get
app.get('/',(req,res)=>{
    res.render('index',{title:'FarmaHelp',path:"Index"})   
});
app.get('/contacto',(req,res)=>{
    res.render('Pages/contacto',{title:'Contacto'})   
});
app.get('/Medicamentos',(req,res)=>{
    res.render('Pages/Medicamentos',{title:'Medicamentos',path:"Medicamentos"})   
});

app.get('/CuidadoPersonal',(req,res)=>{
    res.render('Pages/CuidadoPersonal',{title:'CuidadoPersonal',path:"CuidadoPersonal"})   
});
//