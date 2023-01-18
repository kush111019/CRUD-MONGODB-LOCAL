const mongoose = require('mongoose');

const citySchema= new mongoose.Schema({
  name:{type:String,required:true},
  state:{type:String,required:true},
  population:{type:Number,required:true,default:0},
  size:{type:Number,required:true},
  gentry:{type:String,enum:['A','B','C','D']}
},
{timestamps:true}
);

module.exports = mongoose.model("city",citySchema);
