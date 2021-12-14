const express = require ("express")
const app = express()
const path = require ("path");


app.listen(process.env.PORT || 3000,()=>{console.log("Servidor Corriendo")});

app.get("/",(req,res) =>{
    let htmlPath = path.join (__dirname,"views/home.html");
    res.sendFile(htmlPath);
})

app.get("/register",(req,res) =>{
    res.sendFile (path.join(__dirname, "views/register.html"))
})

app.get("/login",(req,res) =>{
    res.sendFile (path.join(__dirname, "views/login.html"))
})


app.use(express.static(path.resolve(__dirname, "public")));