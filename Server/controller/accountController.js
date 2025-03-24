const customerModel = require("../model/customerModel");
const transactionModel= require("../model/transactionModel");
const accountModel = require("../model/accountModel");

/* ---- Profile ---- */
const Profile=async(req, res)=>{
    const {id}= req.query;
    try {
        const acc=await customerModel.findOne({_id:id}).populate("accountID");
        res.status(200).send(acc);
    } catch (error) {
        res.status(500).send({msg:"Something went wrong"});
    }
}

/* ---- Amount Deposit ---- */
const Deposite=async(req, res)=>{
    const { amount, id}= req.body;
    try {
           const acc=await accountModel.findOne({customerId:id});
           const Trans=await transactionModel.create({customerId:acc._id,amount:amount,transactionType:"credit"});
           const newBalance=Number(acc.balance)+Number(amount);
           await accountModel.findByIdAndUpdate(acc._id,{$set : {balance:newBalance}, $push :{transactionID:Trans._id}});
           res.status(200).send({msg:"Amount Deposit Successfull"});
    } catch (error) {
           res.status(500).send({msg:"Something went wrong"});
    }
}
    
/* ---- Amount Withdraw ---- */
const Withdraw=async(req, res)=>{
    const {amount, id}= req.body;
    try {
        const acc=await accountModel.findOne({customerId:id});
        if (Number(amount) > Number(acc.balance)) {
            return res.status(400).send({ msg: "Insufficient funds" });
        }
        const Trans=await transactionModel.create({customerId:acc._id,amount:amount,transactionType:"debit"});
        const newBalance=Number(acc.balance)-Number(amount);
        await accountModel.findByIdAndUpdate(acc._id, {$set :{balance:newBalance},$push: {transactionID:Trans._id}});
        res.status(200).send({msg:"Amount Withdrawal Successfull"});        
    } catch (error) {
        res.status(500).send({msg:"Something went wrong"});
    }
}

/* ---- Account Balance ---- */
const Balance=async(req,res)=>{
    try {
        const {id}=req.query;
        const accBalance=await accountModel.findOne({customerId:id});
        res.status(200).send(accBalance);      
    } catch (error) {
        res.status(500).send({msg:"Something went wrong"});
    }    
}


/* ---- Mini Statement ---- */
const miniStatement=async(req, res)=>{
    const {id}=req.query;
    try {
        const Transactions=await accountModel.findOne({customerId:id}).populate({path: "transactionID",options: {sort: { Date: -1 },limit: 10}});
        res.status(200).send(Transactions);
    } catch (error) {
        res.status(500).send({msg:"Something went wrong"});
    }
}

/* ---- Statement ---- */
const Statement=async(req,res)=>{
    const {id,startDate,endDate}=req.query;
    try {
      const user = await accountModel.findOne({customerId:id}).populate({
        path: "transactionID",
        options: {sort: { Date: -1 }},
        match: {
          Date: { $gte: new Date(startDate), $lt: new Date(new Date(endDate).setDate(new Date(endDate).getDate() + 1)) }
        }
      });
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send("Something went wrong")
    }  
  }


/* ---- Reset Password ---- */
const resetPassword=async(req, res)=>{
    const {id,Oldpassword,Newpassword}=req.body;
    try {
        const acc=await customerModel.findOne({_id:id});
        if(acc.password != Oldpassword){
           return res.status(400).send({msg:"Old password is incorrect"});
        }
        await customerModel.findByIdAndUpdate(acc._id,{$set:{password:Newpassword}});
        res.status(200).send({msg:"Password Reset Successfull"});
    } catch (error) {
        res.status(500).send({msg:"Something went wrong"});
    }
}

module.exports={
    Profile,
    Deposite,
    Withdraw,
    Balance,
    miniStatement,
    Statement,
    resetPassword
}