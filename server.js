const express=require("express");
const port=3000;
const app=express();
app.get('/',(req,res){
    console.log("hello world");
    res.send("hello world");
});
app.listen(port,()=>{
    console.log(`the server${port}`);
});