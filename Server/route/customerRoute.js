const express=require("express");
const route=express.Router();

const customerController=require("../controller/customerController");   

route.post("/register",customerController.CustomerRegister);
route.post("/login",customerController.CustomerLogin);


module.exports=route;