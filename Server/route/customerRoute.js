const express=require("express");
const route=express.Router();

const customerController=require("../controller/customerController");   


route.post("/registration",customerController.Registration);
route.post("/login",customerController.Login);
route.post("/authenticate",customerController.Authenticate);
route.post("/emailverify",customerController.EmailVerify);
route.post("/forgotPass",customerController.ForgotPassword);
route.post("/changepass",customerController.Changepassword);
 



module.exports=route;