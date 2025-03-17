const express=require("express");
const route=express.Router();

const customerController=require("../controller/customerController");   

route.post("/register",customerController.CustomerRegister);
route.post("/login",customerController.CustomerLogin);
route.post("/resetpassword", customerController.CustomerResetPassword);
route.post("/emailverify", customerController.CustomerEmailVerify);
route.post("/forgotPass", customerController.CustomerForgotPass);


module.exports=route;