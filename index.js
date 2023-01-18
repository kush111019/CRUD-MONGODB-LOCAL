const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();
const route=require("./routes/route");
const{AppConfig}=require("aws-sdk");
const multer=require("multer");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(multer().any());


mongoose.connect(process.env.MONGODB_URI);

app.use("/",route);


app.listen(process.env.PORT||3000,function(){
console.log("app is listening on port "+(process.env.PORT||3000));
})

