import express from "express";
const app = express();


let tiempo= new Date()

app.use((req,res,next)=>{
    console.log(`${req.method} - ${req.url}`);
    console.log(tiempo.getDate(),tiempo.getMonth(),tiempo.getFullYear())
    next();
});

app.get("/",(req,res)=>{
    res.send("ola,express");
});

app.listen(3000,()=>{
    console.log("servidor escuha en http://localhost:3000");
});

app.get("/about",(req,res)=>{
    res.send("esta es la pagina acerca de");
});

app.get("/contact",(req,res)=>{
    res.send("contactanos en contacto@ejemplo.com");
});

app.get("/services",(req,res)=>{
    res.send("Ofrecemos desarrollo web y consultoria tecnologica");
});


