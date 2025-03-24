const express= require("express");
const route=express.Router();

const accountController=require("../controller/accountController");

route.get("/profile",accountController.Profile);
route.post("/deposit",accountController.Deposite);
route.post("/withdraw",accountController.Withdraw);
route.get("/balance",accountController.Balance);
route.get("/miniStatement",accountController.miniStatement);
route.get("/statement",accountController.Statement);
route.post("/resetpassword",accountController.resetPassword);


module.exports=route;