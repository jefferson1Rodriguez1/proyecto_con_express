import express from "express";
const app = express();
let tiempo= new Date()

app.get("/error",(req,res)=>{
    throw new error("este error es simulado");
});
app.use((err,req,res,next)=>{
    console.log("Error dectado:",err.message);
    res.status(500).send("fallos tecnicos");
    console.log(tiempo.getHours(),tiempo.getMinutes());
    console.log(tiempo.getDay(),tiempo.getMonth(),tiempo.getFullYear());
});



app.listen(3000,()=>{
    console.log("servidor escuha en http://localhost:3000");
});