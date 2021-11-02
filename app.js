let express=require("express");
let app=express();
let path=require("path");
app.listen(3000,()=>
console.log("Funciona"));
app.get("/home",function(req,res){
    res.sendFile(path.join(__dirname,"/views/home.html")
)})
app.use(express.static("Public"));