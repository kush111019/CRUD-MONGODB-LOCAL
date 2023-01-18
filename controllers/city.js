const cityModel=require("../models/city");

const insertCity =async function(req,res){
try{ 
let data=req.body;
if(Object.keys(data).length==0){
    return res.status(400).send("body is empty");
}

let newRecord=await cityModel.create(data);
if(newRecord){
    return res.status(201).send("record is inserted successfully");
}
}catch(err)
{
    console.log("error is ",err);
}
}

const getAllCities= async function(req,res){

  let data=await cityModel.find();
  return res.status(200).send({data:data});  

}

const deleteCity= async function(req,res){
 
let name=req.body.name;
let deleteRecord=await cityModel.deleteOne({name:name});
if(deleteRecord){
    return res.status(200).send({data:deleteRecord});
}

}

module.exports = {insertCity,getAllCities,deleteCity};