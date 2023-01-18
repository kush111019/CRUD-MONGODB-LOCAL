const cityController=require('../controllers/city');
const express=require('express');
const router=express.Router();

router.get('/cities',cityController.getAllCities);
router.post("/city",cityController.insertCity);
router.delete("/deleteCity",cityController.deleteCity);


module.exports=router;