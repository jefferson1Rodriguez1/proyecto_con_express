import express from "express";
const app = express();


let tiempo= new Date()

app.use((req,res,next)=>{
    console.log(`${req.method} - ${req.url}`);
    next();
});

//array de prueba
const productos = [
  { id: 1, nombre: 'leche', precio: 10 },
  { id: 2, nombre: 'pan', precio: 20 },
  { id: 3, nombre: 'huevos', precio: 30 }
];

app.get("/",(req,res)=>{
    res.send("bienvenidos a mi aplicacion");
});

app.get("/products",(req,res)=>{
    res.json(productos);
    
});

app.get("/contact",(req,res)=>{
    res.send("contactanos con el numero 345456619");
});

app.listen(3000,()=>{
    console.log("servidor escuha en http://localhost:3000");
});

app.get("/error",(req,res)=>{
    throw new error("este error es simulado");
});
